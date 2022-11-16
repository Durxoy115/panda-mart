import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import avatar from "../../images/avatar.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);
  console.log(user);

  if (updating) {
    return <Loading></Loading>;
  }
  if (updatEerror) {
    return <NotFound />;
  }
  const handleProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    updateProfile({ displayName: name, phoneNumber: phone });
  };
  return (
    <div className="card card-bordered shadow-lg p-5">
      <div>
        <h1 className="text-2xl font-bold ">My Profile</h1>
        <hr className="mt-3 mb-3" />
      </div>

      <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-8">
        <div className="">
          <img
            className="w-32 rounded-full ml-10"
            src={user.photoURL ? user?.photoURL : avatar}
            alt=""
          />
          <label
            for="edit-profile"
            class="btn btn-accent btn-sm text-white font-semibold px-6 mt-8 ml-8"
          >
            Edit Profile
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <p className="font-semibold pl-1 mb-2">{user?.displayName}</p>

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <p className="font-semibold pl-1 mb-2">{user?.email}</p>

          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <p className="font-semibold pl-1 mb-2">{user?.phoneNumber}</p>

          <label className="label">
            <span className="label-text">Last Visit</span>
          </label>
          <p className="font-semibold pl-1 mb-2">
            {user?.metadata.lastSignInTime}
          </p>
        </div>
      </div>

      <div>
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="edit-profile" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Edit Profile <hr />
            </h3>
            <form
              onSubmit={handleProfile}
              className=" overflow-visible mx-auto items-center text-center mt-2"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={user?.displayName}
                  className="input input-bordered input-accent w-full "
                />

                <label className="label">
                  <span className="label-text">Email <span className=" text-xs text-zinc-400">(Email Cannot Be Changed)</span></span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input input-bordered input-accent w-full"
                />

                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  name="phone"
                  type="phone"
                  value={user?.phoneNumber}
                  placeholder="phone"
                  className="input input-bordered input-accent w-full "
                />
              </div>
              <div class="modal-action">
              <label for="edit-profile" class="btn btn-sm ">
                Cancel
              </label>
              <button className="btn btn-success text-white btn-sm">Update</button>
              
            </div>
            </form>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MyProfile;
