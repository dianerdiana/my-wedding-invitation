// ** Icons
export type SidenavItem = {
  isHeader?: boolean;
  title: string;
  icon?: string;
  href: string;
  subMenu?: boolean;
  subMenuItems?: SidenavItem[];
};

export const navigation: SidenavItem[] = [
  {
    title: "Pengantin",
    href: "/admin/config",
  },
  {
    title: "Tamu Undangan",
    href: "/admin/invitation",
  },
  {
    title: "Category Sub",
    href: "/admin/category",
    subMenu: true,
    subMenuItems: [
      {
        title: "Item 1",
        href: "/admin/item-1",
      },
      {
        title: "Item 2",
        href: "/admin/item-2",
      },
    ],
  },
];
