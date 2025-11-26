import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">About Me</h2>
      <h3 className="text-sm font-medium mb-2">Your Story</h3>
      <textarea
        className="border rounded-md w-full p-3 text-sm leading-6"
        rows={5}
        defaultValue={`I am a certified trekking guide with 8 years of experience exploring the beautiful landscapes of Jharkhand. Born and raised in Ranchi, I have deep knowledge of local tribal culture, wildlife, and hidden gems of the region. My passion is to share the rich heritage and natural beauty of Jharkhand with travelers from around the world.`}
      />
    </div>
  );
}
