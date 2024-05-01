import React, { useState } from "react";
import { TextInput, Select, FileInput, Button } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [value, setValue] = useState("");

  return (
    <div className="p-3 max-w-3xl min-h-screen mx-auto">
      <h1 className="text-center text-3xl my-7 font-semibold">Create A Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="nextjs">Next.js</option>
            <option value="reactjs">React.js</option>
          </Select>
        </div>
        <div
          className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3
        "
        >
          <FileInput type="file" accept="/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload an image
          </Button>
        </div>
        <div className="">
          <ReactQuill
            theme="snow"
            placeholder="Write something..."
            className="h-72 mb-6"
            value={value}
            onChange={setValue}
          />
          ;
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
