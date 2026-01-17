"use client";

import React, { useEffect, useState } from "react";
import { 
  collection, 
  onSnapshot, 
  query, 
  orderBy, 
  doc, 
  addDoc, 
  deleteDoc, 
  serverTimestamp, 
  getDocs 
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Lead {
  id: string;
  createdAt: any;
  details: string;
  email: string;
  name: string;
  phone: string;
  project: string;
  serviceType: string;
  timeline: string;
}

interface HistoryItem {
  id: string;
  text: string;
  createdAt: any;
}

export default function LeadsClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [remarks, setRemarks] = useState<{ [key: string]: string }>({});
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [currentLeadHistory, setCurrentLeadHistory] = useState<HistoryItem[]>([]);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  useEffect(() => {
    // Real-time listener for leads
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Lead[];
      setLeads(leadsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    // Handle Firestore Timestamp or standard Date
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString();
  };

  const handleRemarkChange = (id: string, value: string) => {
    setRemarks((prev) => ({ ...prev, [id]: value }));
  };

  const saveRemark = async (id: string) => {
    const text = remarks[id];
    if (!text || text.trim() === "") return;

    try {
      await addDoc(collection(db, "contacts", id, "history"), {
        text: text,
        createdAt: serverTimestamp(),
      });
      // Clear the textarea after saving
      setRemarks((prev) => ({ ...prev, [id]: "" }));
      alert("Remark saved successfully!");
    } catch (error) {
      console.error("Error saving remark:", error);
      alert("Failed to save remark.");
    }
  };

  const viewHistory = async (id: string) => {
    setSelectedLeadId(id);
    try {
      const q = query(collection(db, "contacts", id, "history"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const historyData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as HistoryItem[];
      setCurrentLeadHistory(historyData);
      setHistoryModalOpen(true);
    } catch (error) {
      console.error("Error fetching history:", error);
      alert("Failed to fetch history.");
    }
  };

  const deleteLead = async (id: string) => {
    if (confirm("Are you sure you want to delete this lead? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "contacts", id));
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete lead.");
      }
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-white">Loading leads...</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/20 text-sm uppercase text-gray-400">
            <th className="p-4">Date</th>
            <th className="p-4">Contact Info</th>
            <th className="p-4">Project / Service</th>
            <th className="p-4 w-1/3">Remarks</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-white">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-white/5 transition-colors">
              <td className="p-4 text-sm whitespace-nowrap align-top">
                {formatDate(lead.createdAt)}
              </td>
              <td className="p-4 align-top">
                <div className="font-semibold text-lg mb-1">{lead.name}</div>
                <div className="text-gray-400 text-sm flex flex-col gap-1">
                  <span>{lead.phone}</span>
                  <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">
                    {lead.email}
                  </a>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="mb-1">
                  <span className="font-medium text-gray-300">Project:</span> {lead.project}
                </div>
                <div className="mb-1">
                  <span className="font-medium text-gray-300">Service:</span> {lead.serviceType}
                </div>
                <div>
                   <span className="font-medium text-gray-300">Timeline:</span> {lead.timeline} Weeks
                </div>
                {lead.details && (
                  <div className="mt-2 text-sm text-gray-500 italic">
                    "{lead.details}"
                  </div>
                )}
              </td>
              <td className="p-4 align-top">
                <textarea
                  className="w-full bg-black/30 border border-white/20 rounded p-2 text-sm text-white focus:border-white/60 focus:outline-none transition-colors resize-none mb-2"
                  rows={3}
                  placeholder="Add a remark..."
                  value={remarks[lead.id] || ""}
                  onChange={(e) => handleRemarkChange(lead.id, e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveRemark(lead.id)}
                    className="bg-white text-black px-3 py-1 rounded text-xs font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => viewHistory(lead.id)}
                    className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-colors"
                  >
                    History
                  </button>
                </div>
              </td>
              <td className="p-4 align-top text-center">
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="text-red-500 hover:text-red-400 p-2 transition-colors"
                  title="Delete Lead"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* History Modal */}
      {historyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#111] border border-white/20 rounded-lg max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">Remark History</h3>
              <button 
                onClick={() => setHistoryModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {currentLeadHistory.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No remarks found for this lead.</p>
              ) : (
                <div className="space-y-4">
                  {currentLeadHistory.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded p-3 border border-white/10">
                      <p className="text-gray-300 text-sm mb-2 whitespace-pre-wrap">{item.text}</p>
                      <p className="text-xs text-gray-500 text-right">
                        {formatDate(item.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
