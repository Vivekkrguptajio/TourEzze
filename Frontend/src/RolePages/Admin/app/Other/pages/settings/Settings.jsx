import MainLayout from "../../../../global/Layout";
import SettingsForm from "../../components/settings/SettingsForm";

export default function Settings() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-gray-600 mb-6">
        Manage account, language, notifications & portal preferences
      </p>

      <SettingsForm />
    </MainLayout>
  );
}
