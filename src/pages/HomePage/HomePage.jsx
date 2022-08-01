import { Link} from "react-router-dom";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function NewOrderPage() {
   
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
    <div className="">
    <h2>Welcome to Sugar and Spice!</h2>
    <p>We are so glad you've started your journey in </p>
    <div className="px-0 py-5">
        <Link to={`/recipes/new`}>
          <button className=" hover:ring hover:ring-black-200">
            Create New Recipe
          </button>
        </Link>
      </div>
      </div>
      {/* <Editor
        apiKey='npafj3khl7tngth1g362l3296ugs103cc6vk01ae49nk0svq'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button> */}
    </>
  );
}