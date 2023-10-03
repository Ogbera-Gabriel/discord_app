'use client';

import { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal"
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server";
import { MembersModal } from "../modals/members-models";
import { CreateChannelModal } from "../modals/create-channel-model";




export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
       return null 
    }

    return(
        <>
        <CreateServerModal />
        <InviteModal />
        <EditServerModal />
        <MembersModal />
        <CreateChannelModal />
        </>
    )
}