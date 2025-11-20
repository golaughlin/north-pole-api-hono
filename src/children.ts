export interface Child {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    hometown: string;
    isNice: boolean;
    createdAt: string;
    updatedAt: string;
}

export const children: Child[] = [
  {
    "id": 1,
    "firstName": "Ella",
    "lastName": "Snow",
    "dateOfBirth": "2015-12-03",
    "hometown": "North Pole",
    "isNice": true,
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  },
  {
    "id": 2,
    "firstName": "Tommy",
    "lastName": "Frost",
    "dateOfBirth": "2013-07-21",
    "hometown": "Winterville",
    "isNice": false,
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  },
  {
    "id": 3,
    "firstName": "Maya",
    "lastName": "Clausen",
    "dateOfBirth": "2017-09-10",
    "hometown": "Toytown",
    "isNice": true,
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  },
  {
    "id": 4,
    "firstName": "Leo",
    "lastName": "Evergreen",
    "dateOfBirth": "2014-03-14",
    "hometown": "Pineville",
    "isNice": true,
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  },
  {
    "id": 5,
    "firstName": "Sophie",
    "lastName": "Icelyn",
    "dateOfBirth": "2016-05-29",
    "hometown": "Snowflake City",
    "isNice": false,
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
]