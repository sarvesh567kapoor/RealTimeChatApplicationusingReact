export const unreadNotficationsFunc = (notifications) => {
  return notifications.filter((n) => n.isRead === false);
};
