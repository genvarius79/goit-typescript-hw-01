export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoles = Record<UserRole, string>;
const RoleDescription: UserRoles = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
console.log("====================================");
console.log(RoleDescription);
console.log("====================================");
