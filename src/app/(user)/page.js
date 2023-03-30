import { previewData } from "next/headers";

export default function Page({ authors }) {
  if (previewData()) {
    return <div>preview mode</div>
  }
  return (
    <div>
      <h1>homepage</h1>
      <p>nahhh</p>
    </div>
  )
};
