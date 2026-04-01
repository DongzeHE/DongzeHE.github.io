import { ProfileSidebar } from "@/components/ProfileSidebar";
import { HeroBio } from "@/components/HeroBio";
import { GitTimeline } from "@/components/GitTimeline";
import { BlogSection } from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto">
        {/* Left: Profile Sidebar */}
        <div className="md:col-span-3">
          <ProfileSidebar />
        </div>

        {/* Middle: Hero Bio + Git Timeline */}
        <div className="md:col-span-6 px-6 md:px-8 py-12">
          <HeroBio />
          <GitTimeline />
        </div>

        {/* Right: Blog Posts */}
        <div className="md:col-span-3 px-4 md:px-2 py-12">
          <BlogSection />
        </div>
      </div>
    </main>
  );
}
