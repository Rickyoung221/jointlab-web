const menuList = [
    {
      title: 'Home',
      path:'/home',  // path key
      objectId: 0,
      isPublic: true,
    },
    {
      title: 'Vision',
      path: '/vision',
      objectId:1,
      isPublic: true,
      children: [
        {
          title: 'Mission',
          path: '/vision/mission',
        },
        {
          title:'About Us',
          path: '/vision/aboutUs',
        },
      ]
    },
    {
      title:'Publications',
      path:'/publications',
      objectId:2,
      isPublic:true,
      children:[
        {
          title:'Reports',
          path:'/publications/reports',
        },
        {
          title:'Journal Articles',
          path:'/publications/Journal',
        },
        {
          title:'Conferences' ,
          path:'/publications/conferences',
        },
      ]
    },
    {
      title:'Events',
      path:'/events',
      objectId:3,
      isPublic:true,
      children:[
        {
          title:'Workshop',
          path:'/events/workshop',
        },
        {
          title:'Seminar',
          path:'/events/seminar',
        },
        {
          title:'Media Cover' ,
          path:'/events/mediacover',
        },
      ]
    },
    {
      title:'Join Us',
      path: '/joinus',
      objectId:4,
      isPublic:true,
    },
];

export default menuList;
