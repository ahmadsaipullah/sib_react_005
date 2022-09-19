import { useParams } from "react-router-dom";

export default function Member() {
  let params = useParams();

  return (
    <div>
      <h2>{params.memberName}</h2>
      <p>This is The detail page of {params.memberName}</p>
    </div>
  );
}
