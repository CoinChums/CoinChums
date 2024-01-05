
const members = [
  {
    name: "Suraj BG",
    user_id: "12AZ76",
    email: "surajbg07@gmail.com",
    image_url: "https://randomuser.me/api/portraits/men/",
    verified: true,
    phone: "1234567890",
    account_creation_date: "<timestamp>",
    last_updated: "<timestamp>",
    account_status: "Active",
    access_token: "long token",
    preferred_language: "EN",
    entitlement: "long unique id",
  },
  {
    name: "Jaya Srikar",
    user_id: "13AZ76",
    email: "jasrikar@gmail.com",
    image_url: "https://randomuser.me/api/portraits/men/",
    verified: true,
    phone: "1234567890",
    account_creation_date: "<timestamp>",
    last_updated: "<timestamp>",
    account_status: "Inactive",
    access_token: "long token",
    preferred_language: "KA",
    entitlement: "long unique id",
  },
];

export const expense = {
  groups: [
    {
      icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bengaluru Homies",
      group_members: [],
      created_at: "<timestamp>",
      group_id: "group1",
      updated_at: "<timestamp>",
      group_status: "settled",
    },
    {
      icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bengaluru Homies",
      group_members: [],
      created_at: "<timestamp>",
      group_id: "group2",
      updated_at: "<timestamp>",
      group_status: "unsettled",
    },

    {
      icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bengaluru Homies",
      group_members: [],
      created_at: "<timestamp>",
      group_id: "group3",
      updated_at: "<timestamp>",
      group_status: "archive",
    },
  ],
  expenses: {
    group1: {
      group_balances: {
        "12AZ76": {
          name: "Suraj B G",
          "13AZ76": { name: "Jaya Srikar", amount: 400, status: "owes" },
        },
        "13AZ76": {
          name: "Jaya Srikar",
          "12AZ76": { name: "Suraj B G", amount: 400, status: "debt" },
        },
      },

      expense_list: [
        {
          icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          paid_by: "12AZ76",
          title: "Dinner",
          amount: 800,
          paid_for: [{ user_id: "13AZ76", share: 0.1875 }],
          split_option: "equally | share | percent",
          created_at: "<timestamp>",
          updated_at: "<timestamp>",
          deleted_at: NaN,
          expense_status: "active"
        },
      ],
    },
    group2: {
      group_balances: {
        "12AZ76": {
          name: "Suraj B G",
          "13AZ76": { name: "Jaya Srikar", amount: 400, status: "owes" },
        },
        "13AZ76": {
          name: "Jaya Srikar",
          "12AZ76": { name: "Suraj B G", amount: 400, status: "debt" },
        },
      },

      expense_list: [
        {
          icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          paid_by: "12AZ76",
          title: "Dinner",
          amount: 800,
          paid_for: [{ user_id: "13AZ76", share: 0.1875 }],
          split_option: "equally | share | percent",
          created_at: "<timestamp>",
          updated_at: "<timestamp>",
          deleted_at: NaN,
          expense_status: "active"
        },
      ],
    },
    group3: {
      group_balances: {
        "12AZ76": {
          name: "Suraj B G",
          "13AZ76": { name: "Jaya Srikar", amount: 400, status: "owes" },
        },
        "13AZ76": {
          name: "Jaya Srikar",
          "12AZ76": { name: "Suraj B G", amount: 400, status: "debt" },
        },
      },

      expense_list: [
        {
          icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          paid_by: "12AZ76",
          title: "Dinner",
          amount: 800,
          paid_for: [{ user_id: "13AZ76", share: 0.1875 }],
          split_option: "equally | share | percent",
          created_at: "<timestamp>",
          updated_at: "<timestamp>",
          deleted_at: "<timestamp>",
          expense_status: "deleted"
        },
      ],
    },
  },
};
