import MainLayout from "../../../global/Layout";
import EventTable from "../components/EventTable";

export default function EventManagement() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Event Management</h1>
      <p className="text-gray-600 mb-6">Manage all tourism events across Jharkhand</p>

      <EventTable />
    </MainLayout>
  );
}
