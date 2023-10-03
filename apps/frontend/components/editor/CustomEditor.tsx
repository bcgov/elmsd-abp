"use client"

// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor } from "@tinymce/tinymce-react"
import { useEffect } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomEditor = ({ text, setText }: { text: string; setText: any }) => {
  useEffect(() => {
    console.log("text", text)
  }, [text])

  return (
    <section>
      <Editor
        id="Editor"
        tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
        value={text}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "save",
            "wordcount"
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={setText}
      />
      <article className="tw-max-w-none tw-prose" dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  )
}

export default CustomEditor
