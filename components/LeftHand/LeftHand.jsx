'use client'

import React, {useRef, useState} from 'react';

import './LeftHand.css';

import arrow_icon from '../../public/icons/arrow_down.svg';
import Image from "next/image";
import MadiumCard from "../user_profile/mediumCard/madiumCard";
import LittleCard from "../user_profile/littleCard/littleCard";

function LeftHand(props) {

    const choiceRef = useRef(null)
    const [status, setStatusActive] = useState(false);
    const [statusArchive, setStatusArchive] = useState(false);
    const [search, setSearch] = useState('')
    const [typeAd, setTypeAd] = useState('activeAd')
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState([...dataUser])
    const [choice, setChoice] = useState('old')
    const [choiceTitle, setChoiceTitle] = useState('Сначала старые')


    return (

        <div className='main'>

            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="tarand_style">*/}

            {/*</div>*/}
            <div className="Trand" >
                <h1>В тренде</h1>
            </div>
            <LittleCard/>
            <LittleCard/>
            <LittleCard/>
        </div>

    );
}

export default LeftHand;