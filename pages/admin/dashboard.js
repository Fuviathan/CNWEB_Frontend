import AdminLayout from '@/components/Admin/Layout/AdminLayout'
import ProtectAdminRouter from '@/components/ProtectAdminRouter'
import React from 'react'

export default function dashboard() {
  return (
    <ProtectAdminRouter>
      <AdminLayout />
    </ProtectAdminRouter>
  )
}
