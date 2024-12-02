"use client"
import { useEffect, UseState } from 'react';
import Userscard, { UsersType } from '@/components/pages/dashboard/UsersCard';
import Userscards from '@/components/pages/dashboard/UsersCard';


const index = () => {
  const [users, setUsers] = UseState([]);

  UseEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUsers(data.users);
      })
      .catch(() => {
        console.log("Server xetasi baw verdi");
      });
  }, []);

  return <div>
    {users.map((user: UsersType)=> (
        <Userscards/>
    ))}
  </div>;
};

export default index;
