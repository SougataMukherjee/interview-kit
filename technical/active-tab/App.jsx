import React, { useState } from 'react';

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const setTab = (id) => {
   setActiveTab(id)
  }

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons" >
        {tabs.map((t, i) => (<button
          className={activeTab===t.id ?"active":""}
          data-testid={`tab-button-${t.id}`} 
          onClick={() => setTab(t.id)}>
            {t.label}
          </button>))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        
        {tabs.map((t) => (activeTab === t.id &&<div>{t.content}</div>))}

      </div>
    
    </div>
  );
}