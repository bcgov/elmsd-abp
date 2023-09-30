"use client"

// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor } from "@tinymce/tinymce-react"
import { useEffect, useState } from "react"

const CustomEditor = () => {
  const [text, setText] = useState<string>("")

  const save = () => {
    console.log("saved", text)
  }

  const cancel = () => {
    console.log("cancel")
  }

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
          menubar: true,
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
      <article className="tw-prose lg:tw-prose-xl" dangerouslySetInnerHTML={{ __html: text }} />
      <button type="submit" className="btn btn-primary tw-m-2" onClick={save}>
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={cancel}>
        Cancel
      </button>
    </section>
  )
}

export default CustomEditor
