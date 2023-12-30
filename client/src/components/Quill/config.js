import React , {useMemo} from "react";
import { Quill } from "react-quill";

export const modules = {
    toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],

          [
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["link", "image", "video"],
          ["clean"],
        ],

        history: {
          delay: 500,
          maxStack: 100,
          userOnly: true,
        },}
  };