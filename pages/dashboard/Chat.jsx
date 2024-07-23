import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import TextareaAutosize from 'react-textarea-autosize';
import { Avatar, Button } from '@material-tailwind/react';
import SingleSelect from '@/common/customSingleSelect';
import { Modal, Form } from 'react-bootstrap';
import CustomDropdown from '@/components/CustomDropdown';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
const Chat = ({ MarginTopNone }) => {
    const [SearchInputValue, setSearchInputValue] = useState("")
    const [DisplayAlert, setDisplayAlert] = useState(false)
    const [ProductImageList, setProductImageList] = useState([])
    const [socket, setSocket] = useState(null);
    const [Message, setMessage] = useState('');
    const [CurrentUser, setCurrentUser] = useState([{ created_at: "12", message: "klklk" }])
    const [isModalOpen, setModalOpen] = useState(false);
    //========================= Will code ===========================================================
    //Chat Dropdown
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Newest');

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    //Export Chat Button Code
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSend = () => {
        handleCloseModal();
    };

    const handleDownload = () => {
    };

    //Right side hide and show user details
    const [isDetailsVisible, setDetailsVisible] = useState(true);

    const toggleDetailsVisibility = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    //User History
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredElement(id);
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    };

    const data = [
        { id: 1, title: 'A Title Should be here', time: "23:22" },
        { id: 2, title: 'A Title Should be here', time: "23:22" },
        { id: 3, title: 'A Title Should be here', time: "23:22" },
        { id: 4, title: 'A Title Should be here', time: "23:22" },
        { id: 5, title: 'A Title Should be here', time: "23:22" },
        { id: 6, title: 'A Title Should be here', time: "23:22" },
        { id: 7, title: 'A Title Should be here', time: "23:22" },
        { id: 8, title: 'A Title Should be here', time: "23:22" },
        { id: 9, title: 'A Title Should be here', time: "23:22" },
    ];


    //========================= Will code End =======================================================

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    // const [messageApi, contextHolder] = message.useMessage();
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const patternPhone = /^0[0-9]{10}$/;
    if (socket)
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "chat_message") {
                CurrentUser.push(data)
                setCurrentUser([...CurrentUser])
            }
            if (data.type === "conservation") {
                if (data.messages) {
                    setCurrentUser([...data.messages])
                }
            }
        };

    function handleInputChange(event) {
        const phoneNumber = parsePhoneNumberFromString(event.target.value, 'RU')
        if (phoneNumber) {
            setDisplayAlert(true)
            setDisplayAlert(true)
        } else
            if (pattern.test(event.target.value)) {
                setDisplayAlert(true)
            }
            else {
                setDisplayAlert(false)
            }
        setMessage(event.target.value);
    }

    /// Upload file ////
    function handleSubmitCompanyProfileImage(file) {
        let formdata = new FormData();
        formdata.append("chat_files", file);
        // dispatch(UploadFile(formdata))
    }
    const handleFileChange = (event) => {
        event.preventDefault()
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            handleSubmitCompanyProfileImage(files[i])
        }
    };
    useEffect(
        () => {
            let timer1 = setTimeout(() => setDisplayAlert(false), 3 * 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, [DisplayAlert]);

    const messageEl = useRef(null);
    useEffect(() => {
        if (messageEl && messageEl.current) {
            messageEl.current.addEventListener("DOMNodeInserted", (event) => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: "smooth" });
            });
        }
    }, [messageEl])

    const MessageChatUSer = useRef(null);
    useEffect(() => {
        if (MessageChatUSer && MessageChatUSer.current) {
            MessageChatUSer.current.addEventListener("DOMNodeInserted", (event) => {
                const { currentTarget: target } = event;
                target.scroll({ top: 0, behavior: "smooth" });
            });
        }
    }, [MessageChatUSer])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
        }
    };

    const [visible, setVisible] = useState(false);
    const [SelectUser, setSelectUser] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const div = document.getElementById('yourDivId');
            if (div.scrollTop != 0) {
                let totalLength = div.scrollHeight - div.clientHeight
                if (totalLength > 300) {
                    if (div && div.scrollTop < 300) {
                        setVisible(true);
                    } else {
                        setVisible(false);
                    }
                } else {
                    setVisible(false);
                }
            }
        };
        const div = document.getElementById('yourDivId');
        if (div) {
            div.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (div) {
                div.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    let chatUsers = [
        {
            "username": "Aline Lara",
            "company": "International Cannabies",
            "group": "",
            "id": 265,
            "is_checked": false,
            "role": "company",
            "image": "",
            "message": "Hy do you know about new details",
            "message_time": "2023-08-29 07:52:02.329132",
            "count": 0,
            "conservation_id": 84
        },
        {
            "username": "Emily Davis",
            "company": "Emily Davis",
            "group": "",
            "id": 238,
            "is_checked": false,
            "role": "admin",
            "image": "",
            "message": "helo",
            "message_time": "2023-08-23 10:33:25.164460",
            "count": 0,
            "conservation_id": 83
        },
        {
            "username": "Sarah Edien",
            "company": "Norris Sexton Plc",
            "group": "",
            "id": 243,
            "is_checked": false,
            "role": "admin",
            "image": "",
            "message": "aaaa",
            "message_time": "2023-08-22 11:30:21.541564",
            "count": "",
            "conservation_id": 63
        },
        {
            "username": "David Anderson",
            "company": "Massey and Martin Traders",
            "group": "",
            "id": 267,
            "is_checked": false,
            "role": "company",
            "image": "",
            "message": "",
            "message_time": "",
            "count": "",
            "conservation_id": ""
        },
        {
            "username": "Olivia Taylor",
            "company": "Massey and Martin Traders",
            "group": "",
            "id": 267,
            "is_checked": false,
            "role": "company",
            "image": "",
            "message": "",
            "message_time": "",
            "count": "",
            "conservation_id": ""
        },
        {
            "username": "Christopher Clark",
            "company": "Massey and Martin Traders",
            "group": "",
            "id": 267,
            "is_checked": false,
            "role": "company",
            "image": "",
            "message": "mk",
            "message_time": "",
            "count": "",
            "conservation_id": ""
        },
    ]

    function HandlerFormateDate(timestamp) {
        const date = moment(timestamp);
        let formattedDate;
        if (date.isSame(moment(), 'day')) {
            formattedDate = date.calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'L'
            });
        } else if (date.isSame(moment().subtract(1, 'days'), 'day')) {
            formattedDate = date.calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'L'
            });
        } else {
            // Otherwise, format the date using Moment.js default formatting
            formattedDate = date.format('LT');
        }
        return formattedDate
    }

    useEffect(() => {
        // Create a WebSocket connection
        const socket = new WebSocket("ws://45.15.25.205:8007/chatbot/chat");

        // Handle incoming messages
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            // Handle the message here
        };

        // Handle connection open
        socket.onopen = () => {
            // Connection is open, you can send messages now
        };

        // Handle connection close
        socket.onclose = () => {
            // Connection is closed
        };

        // Handle errors
        socket.onerror = (error) => {
            console.error("WebSocket Error: ", error);
        };

        // Clean up the WebSocket connection when the component unmounts
        return () => {
            socket.close();
        };
    }, []);

    useEffect(() => {
        // Make a GET request to your API
        fetch("http://45.15.25.205:8007/chatbot/chat")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data); // Set the fetched user data in the state
                setLoading(false); // Update loading state
            })
            .catch((error) => {
                setLoading(false); // Update loading state in case of an error
            });
    }, []);

    const [SelectUserInChatList, setSelectUserInChatList] = useState(0)
    const [ActiveStar, setActiveStar] = useState(1)
    const [ActiveTab, setActiveTab] = useState(0)
    const [SelectedIndexInChatListDropdown, setSelectedIndexInChatListDropdown] = useState()


    //Add Reminder Modal
    const [showModalReminder, setShowModalReminder] = useState(false);

    const handleOpenModalReminder = () => {
        setShowModalReminder(true);
    };

    const handleCloseModalReminder = () => {
        setShowModalReminder(false);
    };

    //Add Notes Modal
    const [showModalNotes, setShowModalNotes] = useState(false);

    const handleOpenModalNotes = () => {
        setShowModalNotes(true);
    };

    const handleCloseModalNotes = () => {
        setShowModalNotes(false);
    };

    return (
        <div className={`${MarginTopNone ? '' : "mt-3"}`}>
            <div className='d-flex messages'>
                <div className="messages-list">
                    <div className='outerWrapperMassageHeading'>
                        <div className="messages-heading">
                            <h5>Message</h5>
                            <div className='d-flex align-items-center gap-2'>
                                <Link to={'/dashboard/home'}>
                                    <img className='WidthPreViewImageInChat' src="/assets/icons/prev.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="dropdown" id="chatbotId" ref={dropdownRef}>
                                <a
                                    className={`dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                                    href="#"
                                    role="button"
                                    onClick={toggleDropdown}
                                >
                                    <div className='d-flex align-items-center'>
                                        <span className='headingNumberOfChats d-flex align-items-center'>
                                            {selectedOption} {isDropdownOpen ? <IoMdArrowDropup className='dropdownInChat mt-1' /> : <IoMdArrowDropdown className='dropdownInChat mt-1' />}
                                        </span>
                                    </div>
                                </a>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu show">
                                        {["Item", "Latest", "Bot Only", "In Process", "Archived", "Flagged"].map((item, index) => {
                                            return (
                                                <li key={index} >
                                                    <a
                                                        className={`dropdown-item ${SelectedIndexInChatListDropdown === index ? "active-custom-dropdown-options" : ""}`}
                                                        href="#" onClick={() => {
                                                            handleOptionClick(item)
                                                            setSelectedIndexInChatListDropdown(index)
                                                        }
                                                        }>
                                                        {item}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="messages-input mt-2">
                            <img src='/assets/icons/search.svg' alt="" />
                            <input type="text" placeholder='Search' value={SearchInputValue} onChange={(e) => {
                                setSearchInputValue(e.target.value)
                            }} />
                        </div>
                    </div>
                    <div ref={MessageChatUSer}
                        className={`users-list`}>
                        {chatUsers?.filter((item) => {
                            return SearchInputValue === ''
                                ? item
                                : item?.username?.toLowerCase()?.includes(SearchInputValue) ||
                                item?.group?.toLowerCase()?.includes(SearchInputValue);
                        }).map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${SelectUserInChatList === index ? "SelectedUser" : ""}  d-flex gap-1 chat-user selectorInChat mt-1`}
                                    onClick={() => {
                                        setSelectUserInChatList(index)
                                    }}>
                                    <img src="/assets/icons/user.png" alt="User Profile" />
                                    <div className="chat-user-text">
                                        <Link to={'#'} className='chat-username'>{item.username}</Link>
                                        <p className='text_holder_chat'>{item?.message}</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='d-flex flex-column align-items-end'>
                                            <p className='chat-time'>
                                                {HandlerFormateDate(item?.message_time ? item?.message_time : new Date())}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='chat-container'>
                    <div className="position-relative px-2 pb-2 ">
                        <div className="chat-top flex-wrap gap-3 px-2">
                            <div>
                                <p className='HeadingChatGen'>Jennifer Lawrence</p>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src="/assets/icons/location.svg" alt="location" className='locationsInChat' />
                                    <p className='locationHeadingInChat text-black'>Alexander Smith</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <p className='HeadingCLP'>CLP</p>
                                <Button className='ButtonExportChatTranscript' onClick={handleShowModal}>
                                    Export Chat Transcript
                                </Button>
                            </div>
                        </div>
                        <div className='outerWrapperStartConversation py-2'>
                            <div className='d-flex gap-1 flex-wrap align-items-center justify-content-center'>
                                <img src="/assets/icons/MessageInChat.png" alt="MessageInChat" className='MessageInChat' />
                                <p className='HeadingConversation'>Conversation Started From Dialog:</p>
                                <p className='HeadingSupply HeadingConversation'>Supply</p>
                            </div>
                        </div>
                        <div className="chat" id='yourDivId' ref={messageEl}>
                            {CurrentUser?.map((item, index) => {
                                const messageDate = new Date(item.created_at).toDateString();
                                return (
                                    <div key={index}>

                                        <div className="chat-line position-relative" >
                                            <div className="chat-date">{messageDate}</div>
                                        </div>
                                        <div className='d-flex gap-4'>

                                            <Avatar src='/assets/icons/ChatIcon.png' className='ChatUserImage'></Avatar>

                                            <div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <p className='HeadingChatGen'>ChatGen</p>
                                                    <p className='DateInChat'>1:38 PM</p>
                                                </div>
                                                <p className='Message'>Hello There</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-4 mt-3'>

                                            <Avatar src='/assets/icons/ChatIcon.png' className='ChatUserImage'></Avatar>

                                            <div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <p className='HeadingChatGen'>ChatGen</p>
                                                    <p className='DateInChat'>1:38 PM</p>
                                                </div>
                                                <p className='Message'>Thanks For checking chatgen , do you have any question?</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-4 mt-3'>

                                            <Avatar src='/assets/icons/user.png' className='ChatUserImage'></Avatar>

                                            <div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <p className='HeadingChatGen'>Reese Witherspoon</p>
                                                    <p className='DateInChat'>1:38 PM</p>
                                                </div>
                                                <p className='Message'>Yes, I have query</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="chat-bottom position-relative align-items-end">
                            {DisplayAlert && <div className='outerWrapperAlert'>
                                <Alert message="Remember, You can't share your email or phone number!! " type="error" showIcon />
                            </div>}
                            <form className='w-100 '>
                                <div className={`chat-field Border_None me-2 bg-custom-color
                                     position-relative ${ProductImageList.length > 0 ? "d-block" : "d-flex"}`}>
                                    {ProductImageList.length > 0 && <div className='outerWrapperFilesInChat p-2 d-flex flex-wrap gap-3'>
                                        {ProductImageList.map((item, index) => {
                                            return (
                                                <div key={index} className='d-flex align-items-center'>
                                                    <p className='textHolderInChat'>{item &&
                                                        item.split("/")[item.split("/").length - 1]}</p>
                                                    <img className='C_pointer DeleteIconSize margin-none '
                                                        src="/assets/icons/trash.svg" alt="trash" onClick={() => {
                                                            ProductImageList.splice(index, 1)
                                                            setProductImageList([...ProductImageList])
                                                        }} />
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <div className='d-flex align-items-end  w-100 pe-2'>
                                        <TextareaAutosize
                                            value={Message}
                                            onChange={handleInputChange}
                                            minRows={1} // Set the minimum number of visible rows
                                            maxRows={8} // Set the maximum number of visible rows
                                            className='TextArea'
                                            placeholder='Type a message'
                                            onKeyPress={handleKeyPress}
                                        />
                                        <button type="submit" className='buttonBackgroundColor Border_None'>
                                            <img src='/assets/icons/send.svg' alt="" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <label htmlFor="uploadFile" className='chat-btn me-2 d-flex Border_None bg-custom-color justify-content-center C_pointer align-items-center'>
                                <img src="/assets/icons/file.svg" alt="" />
                            </label>
                            <input
                                id='uploadFile'
                                type="file"
                                multiple
                                className='d-none'
                                accept="image/* , application/pdf"
                                onClick={(event) => {
                                    event.target.previousSibling.value = null
                                    event.target.value = null
                                }}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='SizeOfOuterWrapperUserDetailsInChat'>
                    <div className='d-flex align-items-center justify-content-between OuterWrapperButtonInChat p-2'>
                        <p className='userHeadingInDetailsUsers'>Users</p>
                        <CustomDropdown
                            options={["Lead Capture", "Prospect", "Marketing Qualified", "Sales Qualified", "Opportunities", "Customers"]}
                            onSelect={(e) => {
                            }}
                        />
                        {/* <button className='btn btn-whiteborder d-flex align-items-center' onClick={toggleDetailsVisibility}>
                            <span>{isDetailsVisible ? 'Hide' : 'Show'}</span>
                            {isDetailsVisible ? (
                                <img src="/assets/img/newicon/arrowdown.png" alt="Arrow Down" className='img-fluid ms-2' style={{ width: "13px" }} />
                            ) : (
                                <img src="/assets/img/newicon/arrowright.png" alt="Arrow Right" className='img-fluid ms-2' style={{ width: "13px" }} />
                            )}
                        </button> */}
                    </div>
                    <div className={`outerWrapperUserDetailsInChatnewdiv ${isDetailsVisible ? '' : 'collapsed'}`}>
                        <div className="outerWrapperUserDetailsInChat">
                            <div className='outerWrapperChatUserDetails py-2 px-2'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <Button className='ChatButton' onClick={handleOpenModalReminder}>Add Reminder</Button>
                                    <p className='mt-1 text-center HeadingInUserDetailsInChat'>Kenny Daived</p>
                                    <Button className='ChatButton' onClick={handleOpenModalNotes}>Add Notes</Button>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src="/assets/icons/location.svg" alt="location" className='locationsInChat' />
                                    <p className='locationHeadingInChat'>Alexander Smith</p>
                                </div>
                                <div className='d-flex justify-content-center mt-1'>
                                    <div className='d-flex outerWrapperStartsInChat'>
                                        <div className={`  AllStartsInChat ${ActiveStar === 0 ? "AllStartsInChatActive" : ""}`}
                                            onClick={() => {
                                                setActiveStar(0)
                                            }}
                                        >
                                            <img src="/assets/icons/RedButton.png" alt="stars" className='RedButtonInChatDetails' />
                                        </div>
                                        <div className={`AllStartsInChat outerWrapperSingleStar ${ActiveStar === 1 ? "AllStartsInChatActive" : ""}`}
                                            onClick={() => {
                                                setActiveStar(1)
                                            }}
                                        >
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                        </div>
                                        <div className={`d-flex outerWrapperStarsInBetween AllStartsInChat 
                                ${ActiveStar === 2 ? "AllStartsInChatActive" : ""}`}
                                            onClick={() => {
                                                setActiveStar(2)
                                            }}
                                        >
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                        </div>
                                        <div className={`d-flex AllStartsInChat 
                                ${ActiveStar === 3 ? "AllStartsInChatActive" : ""}
                                `}
                                            onClick={() => {
                                                setActiveStar(3)
                                            }}
                                        >
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                            <img src="/assets/icons/star.png" alt="star" className='StarsInChat' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='px-2 pt-2'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <img src="/assets/icons/usersInChat.png" className='usersInChatDetails' alt="usersInChat" />
                                        <p className='HeadingParticipant'>Agents</p>
                                    </div>
                                    <a href='#' className='btn btn-addagent'>Add Agents</a>
                                </div>

                                <div className='d-flex gap-2 my-2 userlistDiv'>
                                    <div className=''>
                                        <div className='d-flex gap-1 align-items-center me-3'>
                                            <div className='Dot'></div>
                                            <p className='HeadingIngChatUserDetails'>Emily Johnson</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-center me-3'>
                                            <div className='Dot'></div>
                                            <p className='HeadingIngChatUserDetails'>Emily Johnson</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-center me-3'>
                                            <div className='Dot'></div>
                                            <p className='HeadingIngChatUserDetails'>Emily Johnson</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-center me-3'>
                                            <div className='Dot'></div>
                                            <p className='HeadingIngChatUserDetails'>Emily Johnson</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-center me-3'>
                                            <div className='Dot'></div>
                                            <p className='HeadingIngChatUserDetails'>Emily Johnson</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='outerWrapperSelectInChat'>
                                    <SingleSelect
                                        options={[
                                            { value: 'Update Status', label: 'Update Status' },
                                            { value: 'Update Status', label: 'Update Status' },
                                            { value: 'Update Status', label: 'Update Status' },
                                            { value: 'Update Status', label: 'Update Status' },
                                        ]}
                                        handlerSelectedOption={(options) => {
                                            setSelectUser(options.value)
                                        }}
                                        defaultSelected={SelectUser}
                                        borderedRed={""}
                                    />
                                </div>
                                <div className='my-2'>
                                    <div>
                                        <div className='d-flex justify-content-center'>
                                            <div
                                                className={`tab-content ${ActiveTab === 0 ? 'active-tab' : ''}`}
                                                onClick={() => setActiveTab(0)}
                                            >
                                                <p className={`TabTitleInChat ${ActiveTab === 0 ? 'ActiveTabTitleInChat' : ''}`}>
                                                    User Info
                                                </p>
                                            </div>
                                            <div
                                                className={`tab-content ${ActiveTab === 1 ? 'active-tab' : ''}`}
                                                onClick={() => setActiveTab(1)}
                                            >
                                                <p className={`TabTitleInChat ${ActiveTab === 1 ? 'ActiveTabTitleInChat' : ''}`}>
                                                    User History
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {ActiveTab === 0 && (
                                <div className='p-2 outerWrapperTabsUserDetails'>

                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src="/assets/icons/write.svg" alt="write" />
                                        <p className='headingConversationalDetails'>CONVERSATIONAL DETAILS</p>
                                    </div>
                                    <p className='HeadingConversationStart'>Conversation Started From</p>
                                    <p className='HeadingConversationStart headingConversationalDetails c_pointer'>https://App</p>
                                    <p className='HeadingConversationStart'>Web Browser and device</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex gap-1 align-items-center'>
                                            <img src="/assets/icons/write.svg" alt="write" />
                                            <p className='headingConversationalDetails'>chatgen Attributes</p>
                                        </div>
                                        <img src="/assets/icons/setting.svg" alt="write" />
                                    </div>

                                    <div className='mt-2'>
                                        <p className='HeadingFullNameInChat'>Full Name</p>
                                        <p className='MainHeadingFullName'>Kenny Daived</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='HeadingFullNameInChat'>Email</p>
                                        <p className='MainHeadingFullName'>KennyDaived12@gmail.com</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='HeadingFullNameInChat'>Mobile Number</p>
                                        <p className='HeadingFullNameInChat'>Add....</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='HeadingFullNameInChat'>Location</p>
                                        <p className='MainHeadingFullName'>New York , USA</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-2'>
                                        <div className='d-flex gap-1 align-items-center'>
                                            <img src="/assets/icons/write.svg" alt="write" />
                                            <p className='headingConversationalDetails'>Custom Attributes</p>
                                        </div>
                                        <img src="/assets/icons/setting.svg" alt="write" />
                                    </div>
                                    <div className='mt-2'>
                                        <p className='MainHeadingFullName textColor'>Call Back</p>
                                        <p className='MainHeadingFullName textColor'>Add ...</p>
                                    </div>

                                </div>
                            )}
                            {ActiveTab === 1 && (
                                <div className='p-2 outerWrapperTabsUserDetails'>
                                    <div>
                                        {data.map((item) => (
                                            <div
                                                key={item.id}
                                                className='d-flex align-items-center justify-content-between p-2 bghiover'
                                                onMouseEnter={() => handleMouseEnter(item.id)}
                                                style={{ cursor: "pointer" }}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className='d-flex align-items-start chat-user'>
                                                    <TiMessages className='messageIcon' />
                                                    <div className='ms-2'>
                                                        <p className=' chat-username fs-6 mb-0'>{item.title}</p>
                                                        <p className=' chat-time'>{item.time}</p>
                                                    </div>
                                                </div>
                                                {hoveredElement === item.id && (
                                                    <div>
                                                        <FaRegTrashAlt className='trashIcon' />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header className='justify-content-between'>
                    <Modal.Title>
                        Export Chat Transcript
                    </Modal.Title>
                    <img src="/assets/icons/close.svg" alt="close" className='CloseInModal c_pointer' onClick={() => {
                        handleCloseModal()
                    }} />
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label className='form-label'>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label className='form-label'>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"

                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>
                    <Button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none' style={{ borderColor: "green" }} onClick={handleDownload}>
                        Download
                    </Button>
                    <Button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none' onClick={handleSend}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalReminder} onHide={handleCloseModalReminder} centered>
                <Modal.Header className='justify-content-between'>
                    <Modal.Title>
                        Add Reminder
                    </Modal.Title>
                    <img src="/assets/icons/close.svg" alt="close" className='CloseInModal c_pointer' onClick={() => {
                        handleCloseModalReminder()
                    }} />
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label className='form-label'>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label className='form-label'>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label className='form-label'>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>
                    <div className="d-flex gap-2">
                        <Button className="buttonUnActive text-color" onClick={() => {
                            handleCloseModalReminder()
                        }}>
                            Cancel
                        </Button>
                        <Button>
                            Add
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalNotes} onHide={handleCloseModalNotes} centered>
                <Modal.Header className='justify-content-between'>
                    <Modal.Title>
                        Add Notes
                    </Modal.Title>
                    <img src="/assets/icons/close.svg" alt="close" className='CloseInModal c_pointer' onClick={() => {
                        handleCloseModalNotes()
                    }} />
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formMessage">
                            <Form.Label className='form-label'>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>
                    <div className="d-flex gap-2">
                        <Button className="buttonUnActive text-color" onClick={() => {
                            handleCloseModalNotes()
                        }}>
                            Cancel
                        </Button>
                        <Button>
                            Add
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div >

    )
}
export default Chat