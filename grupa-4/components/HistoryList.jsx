import Entry from "./Entry";
import { historyData } from "../../data/historyData";

export default function HistoryList() {
  return (
    <div>
      {historyData.map((item, index) => (
        <Entry key={item.id} item={item} side={index % 2 === 0 ? "pl" : "eu"} />
      ))}
    </div>
  );
}
