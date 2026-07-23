import { ProfileHeader } from "@/components/profile-header"
import { SectionTabs } from "@/components/section-tabs"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <ProfileHeader />
      <SectionTabs />
    </main>
  )
}
