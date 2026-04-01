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

        {/* Right: Content area */}
        <div className="md:col-span-9 px-6 md:px-8 py-12">
          {/* About section — full width */}
          <HeroBio />

          {/* Git History + Blog Posts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <GitTimeline />
            </div>
            <div className="lg:col-span-1">
              <BlogSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
