
export default function Details({ userData, isEditing, handleSave, setUserData }) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-(--bg-card) rounded-[2rem] p-8 md:p-10 shadow-(--shadow-md) border border-(--border-color) h-full">
        {!isEditing ? (
          <>
            <h3 className="text-2xl font-bold text-(--text-primary) mb-6">
              About Me
            </h3>
            <p className="text-(--text-secondary) leading-relaxed mb-10">
              {userData.bio}
            </p>

            <h3 className="text-xl font-bold text-(--text-primary) mb-6">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div className="p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)">
                <span className="block text-xs uppercase text-(--text-muted) font-bold tracking-wider mb-1">
                  Full Name
                </span>
                <span className="text-(--text-primary) font-semibold text-lg">
                  {userData.name}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)">
                <span className="block text-xs uppercase text-(--text-muted) font-bold tracking-wider mb-1">
                  Role
                </span>
                <span className="text-(--text-primary) font-semibold text-lg">
                  {userData.role}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)">
                <span className="block text-xs uppercase text-(--text-muted) font-bold tracking-wider mb-1">
                  Email
                </span>
                <span className="text-(--text-primary) font-semibold text-lg truncate">
                  {userData.email}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)">
                <span className="block text-xs uppercase text-(--text-muted) font-bold tracking-wider mb-1">
                  Phone
                </span>
                <span className="text-(--text-primary) font-semibold text-lg">
                  {userData.phone}
                </span>
              </div>
            </div>
          </>
        ) : (
          <form
            onSubmit={handleSave}
            className="space-y-6 animate-[fadeIn_0.3s_ease-out_forwards]"
          >
            <h3 className="text-2xl font-bold text-(--text-primary) mb-6">
              Edit Profile
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Role
                </label>
                <input
                  type="text"
                  value={userData.role}
                  onChange={(e) =>
                    setUserData({ ...userData, role: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Email
                </label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Location
                </label>
                <input
                  type="text"
                  value={userData.location}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      location: e.target.value,
                    })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase text-(--text-secondary) tracking-wider ml-1">
                  Bio
                </label>
                <textarea
                  rows="4"
                  value={userData.bio}
                  onChange={(e) =>
                    setUserData({ ...userData, bio: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all font-medium resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-4 rounded-xl bg-linear-to-r from-(--color-primary) to-indigo-600 text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-[0_10px_20px_-5px_var(--color-primary)] transition-all transform hover:-translate-y-1"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
