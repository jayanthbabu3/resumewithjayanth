import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User, LayoutDashboard, Home, FileText, BookOpen, Menu, FolderOpen, ChevronDown } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useFirebaseAuth();
  const isEditor = location.pathname.startsWith("/editor");

  const navItems = useMemo(() =>
    user ? [
      { label: "Templates", to: "/dashboard", icon: LayoutDashboard },
      { label: "My Resumes", to: "/my-resumes", icon: FolderOpen },
      { label: "ATS Guide", to: "/ats-guidelines", icon: BookOpen }
    ] : [
      { label: "Home", to: "/", icon: Home },
      { label: "ATS Guide", to: "/ats-guidelines", icon: BookOpen }
    ]
  , [user]);

  const getUserInitials = () => {
    if (user?.displayName) {
      return user.displayName.split(' ').map(name => name[0]).join('').slice(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.split('@')[0].slice(0, 2).toUpperCase();
    }
    return "U";
  };

  const getUserDisplayName = () => {
    if (user?.displayName) {
      return user.displayName;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return "User";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section - Clean & Professional */}
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 -ml-2 px-2 py-1.5 rounded-xl transition-all duration-200 hover:bg-gray-50"
            aria-label="Resume Cook home"
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 transition-all duration-200 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105">
              <FileText className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-gray-900">
                Resume<span className="text-primary">Cook</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Craft Your Career
              </span>
            </div>
          </button>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section - User Actions */}
          <div className="flex items-center gap-3">
            
            {/* Sign In Button - Not logged in */}
            {!user && (
              <Button
                onClick={() => navigate("/auth")}
                className="hidden sm:inline-flex h-9 px-4 rounded-lg font-medium shadow-sm"
              >
                Sign In
              </Button>
            )}

            {/* User Menu - Logged in (Desktop) */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hidden md:flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <Avatar className="h-8 w-8 ring-2 ring-gray-100">
                      <AvatarImage src={user.photoURL || undefined} alt={getUserDisplayName()} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-sm font-semibold">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-xl shadow-lg border-gray-100" align="end">
                  {/* User Info */}
                  <div className="px-3 py-3 border-b border-gray-100">
                    <p className="font-semibold text-sm text-gray-900">{getUserDisplayName()}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                  </div>
                  
                  <div className="py-1">
                    <DropdownMenuItem
                      onClick={() => navigate("/dashboard")}
                      className="px-3 py-2 cursor-pointer rounded-lg mx-1"
                    >
                      <LayoutDashboard className="mr-2.5 h-4 w-4 text-gray-500" />
                      <span>Templates</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/my-resumes")}
                      className="px-3 py-2 cursor-pointer rounded-lg mx-1"
                    >
                      <FolderOpen className="mr-2.5 h-4 w-4 text-gray-500" />
                      <span>My Resumes</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/profile")}
                      className="px-3 py-2 cursor-pointer rounded-lg mx-1"
                    >
                      <User className="mr-2.5 h-4 w-4 text-gray-500" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </div>
                  
                  <DropdownMenuSeparator className="bg-gray-100" />
                  
                  <div className="py-1">
                    <DropdownMenuItem
                      onClick={signOut}
                      className="px-3 py-2 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 rounded-lg mx-1"
                    >
                      <LogOut className="mr-2.5 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              {user && (
                <Avatar className="h-8 w-8 ring-2 ring-gray-100">
                  <AvatarImage src={user.photoURL || undefined} alt={getUserDisplayName()} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-sm font-semibold">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              )}
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-lg"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  {/* Mobile Menu Header */}
                  <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          Resume<span className="text-primary">Cook</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="p-4">
                    <nav className="space-y-1">
                      {navItems.map(({ label, to, icon: Icon }) => (
                        <SheetClose asChild key={label}>
                          <NavLink
                            to={to}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                isActive 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                              )
                            }
                          >
                            <Icon className="h-5 w-5" />
                            {label}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </nav>

                    {/* User Section in Mobile */}
                    {user && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="px-4 mb-4">
                          <p className="font-semibold text-sm text-gray-900">{getUserDisplayName()}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <SheetClose asChild>
                          <button
                            onClick={() => navigate("/profile")}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                          >
                            <User className="h-5 w-5" />
                            Profile
                          </button>
                        </SheetClose>
                        <SheetClose asChild>
                          <button
                            onClick={signOut}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut className="h-5 w-5" />
                            Log out
                          </button>
                        </SheetClose>
                      </div>
                    )}

                    {/* Sign In for Mobile */}
                    {!user && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <SheetClose asChild>
                          <Button
                            onClick={() => navigate("/auth")}
                            className="w-full h-11 rounded-xl font-medium"
                          >
                            Sign In
                          </Button>
                        </SheetClose>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
