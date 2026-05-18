import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Toast {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
}

interface UIState {
  // Mobile nav
  isMobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  toggleMobileNav: () => void

  // Search
  searchQuery: string
  setSearchQuery: (q: string) => void

  // Toast queue (lightweight — no external library needed yet)
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      isMobileNavOpen: false,
      setMobileNavOpen: (open) => set({ isMobileNavOpen: open }),
      toggleMobileNav: () => set((s) => ({ isMobileNavOpen: !s.isMobileNavOpen })),

      searchQuery: '',
      setSearchQuery: (q) => set({ searchQuery: q }),

      toasts: [],
      addToast: (toast) =>
        set((s) => ({
          toasts: [...s.toasts, { ...toast, id: crypto.randomUUID() }],
        })),
      removeToast: (id) =>
        set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
    }),
    { name: 'mysira-ui' }
  )
)