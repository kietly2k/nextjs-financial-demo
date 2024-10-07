import SideNav from '@/app/ui/dashboard/sidenav';
 
// This children prop can either be a page or another layout. In this case, the pages inside /dashboard will automatically be nested inside a <Layout />
// This layout unique to the dashboard pages
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}