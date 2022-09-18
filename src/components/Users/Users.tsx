import React, {MouseEventHandler} from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/149071.png';
import {UserType} from '../../redux/user-reducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
};

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(
        (props.totalUsersCount > 54 ? 54 : props.totalUsersCount) / props.pageSize
    );

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    const unfollowBtnHandler = (id: number) => {
        props.toggleFollowingInProgress(true, id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'}
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(id)
            }
            props.toggleFollowingInProgress(false, id)
        })
    }

    const followBtnHandler = (id: number) => {
        props.toggleFollowingInProgress(true, id)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'}
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.follow(id)
            }
            props.toggleFollowingInProgress(false, id)
        })
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    return (
                        <span
                            key={el}
                            onClick={() => {
                                props.onPageChanged(el);
                            }}
                            className={props.currentPage === el ? classes.selectedPage : ''}
                        >
              {el}{' '}
            </span>
                    );
                })}
            </div>
            {props.users.map((el) => (
                <div key={el.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + el.id}>
                <img
                    className={classes.photo}
                    src={el.photos.small !== null ? el.photos.small : userPhoto}
                    alt={'photo'}
                />
              </NavLink>
            </div>
            <div>
              {el.followed ? (
                      <button disabled={props.followingInProgress.some(id => id === el.id)}
                              onClick={() => unfollowBtnHandler(el.id)}
                      >Unfollow</button>) :
                  (<button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                          followBtnHandler(el.id);
                      }}>
                          Follow
                      </button>
                  )}
            </div>
          </span>
                    <span>
            <span>
              <div>{el.name}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{'el.location.country'}</div>
              <div>{'el.location.city'}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};
