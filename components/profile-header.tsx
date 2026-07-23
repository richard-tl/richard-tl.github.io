"use client"

import { profile } from "@/lib/content"

export function ProfileHeader() {
  return (
    <header className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      {/* Profile picture */}
      <div className="aspect-square w-full overflow-hidden bg-muted">
        {profile.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photo || "/placeholder.svg"}
            alt="portrait"
            onError={(e) => {
              // Keep a clean grey box until the real headshot is added to /public/profile.
              e.currentTarget.style.visibility = "hidden"
            }}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="sr-only">Profile photo placeholder</span>
        )}
      </div>

      {/* Bio */}
      <div className="flex flex-col">
        <h1 className="text-[13px] font-bold uppercase tracking-wide leading-relaxed">{profile.name}:</h1>
        <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-pretty">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{profile.email}</p>
      </div>
    </header>
  )
}
