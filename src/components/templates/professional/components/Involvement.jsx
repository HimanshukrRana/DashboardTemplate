import { HTMLRenderer } from "src/helpers/common/components/HTMLRenderer";

export default function Involvement({ data }) {
  return (
    <div>
      <HTMLRenderer htmlString={data} />
    </div>
  );
}

