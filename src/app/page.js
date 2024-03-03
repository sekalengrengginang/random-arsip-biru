"use client"
import SearchBar from "@/components/SearchBar";
import StudentCard from "@/components/StudentCard";
import 'dotenv/config'
export default function Home() {
  return (
    <>
    <div className="student-search">
    <SearchBar />
    </div>
      <div className="student-card">
        <StudentCard />
      </div>
    </>
  );
}
