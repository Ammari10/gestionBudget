
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  Clock, 
  Users, 
  FileSpreadsheet, 
  Wallet, 
  Building2, 
  AlertCircle, 
  Settings, 
  LogOut, 
  ChevronRight,
  CalendarIcon
} from "lucide-react";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: BarChart3, title: "Dashboard", path: "/" },
    { icon: Users, title: "Prestataires", path: "/contractors" },
    { icon: Building2, title: "Cabinets", path: "/agencies" },
    { icon: Clock, title: "Heures Travaillées", path: "/hours" },
    { icon: FileSpreadsheet, title: "Rapports", path: "/reports" },
    { icon: Wallet, title: "Budget", path: "/budget" },
    { icon: AlertCircle, title: "Alertes", path: "/alerts" },
    { icon: CalendarIcon, title: "Calendrier", path: "/calendar" },
  ];

  return (
    <Sidebar defaultCollapsed={collapsed} onCollapseChange={setCollapsed}>
      <SidebarHeader className="py-4">
        <div className="flex items-center px-4">
          <div className="flex items-center space-x-2">
            <div className="bg-banking-blue rounded-md p-1.5">
              <div className="font-bold text-white text-lg">CIH</div>
            </div>
            {!collapsed && (
              <div className="font-semibold text-sidebar-foreground ml-2">
                Analytics Hub
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {collapsed ? "Menu" : "Menu Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                      {!collapsed && <ChevronRight className="h-4 w-4 ml-auto opacity-50" />}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            {collapsed ? "Opts" : "Options"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings" className="flex items-center">
                    <Settings className="h-5 w-5" />
                    <span>Paramètres</span>
                    {!collapsed && <ChevronRight className="h-4 w-4 ml-auto opacity-50" />}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-muted p-1">
                <div className="h-8 w-8 rounded-full bg-banking-blue flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AM</span>
                </div>
              </div>
              {!collapsed && (
                <div className="space-y-1">
                  <p className="text-sm font-medium">Admin CIH</p>
                  <p className="text-xs text-muted-foreground">admin@cihbank.ma</p>
                </div>
              )}
            </div>
            {!collapsed && (
              <Button size="icon" variant="ghost">
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
