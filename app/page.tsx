import { ProfileSidebar } from "@/components/ProfileSidebar";
import { GitTimeline } from "@/components/GitTimeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto">
        <div className="md:col-span-4">
          <ProfileSidebar />
        </div>
        <div className="md:col-span-8 px-6 md:px-12 py-12">
          <GitTimeline />
        </div>
      </div>
    </main>
  );
}
