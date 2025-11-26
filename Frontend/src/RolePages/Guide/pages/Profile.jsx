import React from "react";
import ProfileHeader from "../Components/myProfile/ProfileHeader";
import ProfilePhotoSection from "../Components/myProfile/ProfilePhotoSection";
import BasicInfoSection from "../Components/myProfile/BasicInfoSection";
import ProfessionalDetailsSection from "../Components/myProfile/ProfessionalDetailsSection";
import AboutSection from "../Components/myProfile/AboutSection";
import CertificationsSection from "../Components/myProfile/CertificationsSection";


export default function Profile() {
  return (
    <div className="min-h-screen bg-[#f9fafb] p-6">
      <ProfileHeader />
      <ProfilePhotoSection />
      <BasicInfoSection />
      <ProfessionalDetailsSection />
      <AboutSection />
      <CertificationsSection />
    </div>
  );
}
