import { Layout } from "../components/Layout";
import { InspectionCalender } from "../components/InspectionCalender";

export default function Inspection() {
  return (
    <Layout title="Inspection">
      <div className="mx-8 my-2">
        <p className="font-mono">Inspection Schedule</p>
        <InspectionCalender />
      </div>
    </Layout>
  );
}
