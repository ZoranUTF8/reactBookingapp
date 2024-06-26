namespace NavbarItemsTeacher {
  export enum Items {
    Home = "teacher-dashboard",
    TeacherSettings = "settings",
    TeacherBookingList = "teacher-booking-list",
    TeacherTimetable = "teacher-timetable",
  }

  export const Data = {
    [Items.Home]: {
      id: "teacherTimetable",
      title: "Dashboard",
      route: "/dashboard",
    },
    [Items.TeacherSettings]: {
      id: "settings",
      title: "Settings",
      route: "/settings",
    },
    [Items.TeacherBookingList]: {
      id: "teacherBookingList",
      title: "Bookings list",
      route: "/bookings-list",
    },
    [Items.TeacherTimetable]: {
      id: "teacherTimetable",
      title: "Timetable",
      route: "/timetable",
    },
  };
}

export { NavbarItemsTeacher };
