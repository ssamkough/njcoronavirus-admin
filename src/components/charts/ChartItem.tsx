import React, { useState, useEffect } from "react";
import { Upload, Card, Menu, Button, Modal, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const ChartItem = (post: any) => {
  const postItem = post.post;
  const uploadUrl: string = `http://localhost:8000/api/datawrapper/chart/${postItem.publicId}/data`;

  const { Dragger } = Upload;

  const [visible, setVisible] = useState(false);
  const [btnType, setBtnType] = useState("");
  const [file, setFile] = useState(File as any);
  const [uploading, setUploading] = useState(false);

  const showModal = (e: any) => {
    setBtnType(e.target.name);
    setVisible(true);
  };

  const scrape = () => {
    puppeteer.use(StealthPlugin());

    puppeteer.launch({ headless: true }).then(async (browser) => {
      console.log("Running tests..");

      const page = await browser.newPage();
      const covidUrl =
        "https://maps.arcgis.com/apps/opsdashboard/index.html#/ec4bffd48f7e495182226eee7962b422";

      await page.goto(covidUrl);
      await page.waitFor(1000);

      let emberId = 165;
      while (emberId <= 205) {
        let xpath = `//*[@id="ember${emberId}"]/div/div/p[1]/strong`;
        let [town] = await page.$x(xpath);
        let townTxt = await town.getProperty("textContent");
        let townRawTxt = await townTxt.jsonValue();

        xpath = `//*[@id="ember${emberId}"]/div/div/p[2]/span/span/strong`;
        let [number] = await page.$x(xpath);
        let numberTxt = await number.getProperty("textContent");
        let numberRawTxt = await numberTxt.jsonValue();

        console.log(townRawTxt, ": ", numberRawTxt);

        emberId = emberId + 2;
      }

      await browser.close();
      console.log(`All done ✨`);
    });
  };

  const handleOk = (e: any) => {
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
  };

  const uploadProps = {
    // onRemove: (file: File) => {
    //   setFile("");
    // },
    // beforeUpload: (file: File) => {
    //   setFile(file);
    // },
    // file,
  };

  return (
    <Card title={postItem.title}>
      <ul className="no-list-deco chart-item-body">
        <li>
          <b>Public Id</b>
          {": "}
          {postItem.publicId}
        </li>
        <li>
          <b>URL</b>
          {": "}
          {postItem.url}
        </li>
      </ul>
      <Menu mode="horizontal">
        <Menu.Item>
          <Button name="btnDetails" onClick={(e: any) => showModal(e)}>
            Details
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button name="btnUpdate" onClick={(e: any) => showModal(e)}>
            Update
          </Button>
        </Menu.Item>
      </Menu>
      <Modal
        title={`${postItem.title}: ${postItem.publicId}`}
        visible={visible}
        onOk={(e: any) => handleOk(e)}
        onCancel={(e: any) => handleCancel(e)}
      >
        {btnType === "btnUpdate" ? (
          <div>
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Uploads instantly</p>
            </Dragger>
            <Button
              onClick={handleUpload}
              disabled={file === ""}
              loading={uploading}
              className="upload-file-btn"
            >
              {uploading ? "Uploading" : "Start Upload"}
            </Button>
          </div>
        ) : btnType === "btnDetails" ? (
          <Menu>
            {Object.keys(postItem).map((key: any, e: number) => (
              <Menu.Item key={e}>
                {key}
                {": "}
                {postItem[key]}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <div>Loading modal...</div>
        )}
      </Modal>
    </Card>
  );
};

export default ChartItem;
