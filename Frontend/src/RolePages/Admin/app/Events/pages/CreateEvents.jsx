import MainLayout from "../../../global/Layout";
import CreateEventForm from "../components/CreateEventForm";

export default function CreateEvents() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Create Event</h1>
      <p className="text-gray-600 mb-6">Add new tourism event details</p>

      <CreateEventForm />
    </MainLayout>
  );
}
