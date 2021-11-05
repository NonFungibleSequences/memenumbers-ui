import React from 'react'
import type { Page } from '../src/types/PageComponent'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../src/components/Layout'
import { DefaultFont } from '../src/components'

const Container = styled.div`
    ${DefaultFont}// display: flex;
    // flex-direction: row;

    // @media (max-width: 768px) {
    //     flex-direction: column;
    // }
`

const Question = styled.h2`
    color: rgba(166, 250, 255, 1);
`

const Faq: Page = () => {
    return (
        <Container>
            <h1>Frequently Asked Questions</h1>
            <div>
                <Question>What is MemeNumbers?</Question>
                <p>
                    MemeNumbers is a game where wit and speed are the keys to
                    owning a one-of-a-kind NFT.
                </p>
                <p>
                    We generate up to eight random Numbers to be sold in Dutch
                    auctions that last for one hour. Auction starts at Ξ5 (Eth)
                    and ends at Ξ0.
                </p>
                <p>
                    Anyone can get a Number, anyone can sell a Number. Selling
                    Numbers are royalty FREE! (We don’t take a cut.) If you own
                    two or more Numbers, you can do math with them to create a
                    new Number!
                </p>
                <Question>Is this a NFT?</Question>
                <p>
                    Yes, MemeNumbers are standard ERC-721 on the Ethereum
                    blockchain.
                </p>
                <Question>But where’s the art?</Question>
                <p>
                    MemeNumbers are not typical Jpegs. It’s in a class called
                    “Primitives”, which can be used as building blocks to other
                    NFTs and the Metaverse!
                </p>
                <p>
                    The art of MemeNumbers is not in its drawing. It’s in the
                    project itself - the logic behind it, its attributes, its
                    actual data on the blockchain; the sum of it all is
                    considered the “art”.
                </p>
                <Question>How are the numbers chosen?</Question>
                <p>
                    The numbers are randomly generated using the blockhash as
                    the seed. The possible range of numbers are 0 through
                    Uint255. You can read the code for the number distribution
                    algorithm on the{' '}
                    <a
                        href="https://etherscan.io/address/0x98afe7a8d28bbc88dcf41f8e06d97c74958a47dc#code"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contract.
                    </a>
                </p>
                <Question>
                    Can the number distribution algorithm be changed?
                </Question>
                <p>
                    Nope. The number distribution algorithm is the heart and
                    soul of MemeNumbers. We made it as immutable and transparent
                    as possible. The algorithm is on chain and non-upgradeable.
                </p>
                <Question>When was MemeNumbers launched?</Question>
                <p>
                    We published the smart contract on{' '}
                    <a
                        href="https://etherscan.io/tx/0x354f2d41e0c6f8bd6f5cce131510393570c45b491b9bc29d2de44bf75b1257fd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        October 30th, 2021
                    </a>
                </p>
                <Question>How long will MemeNumbers be up?</Question>
                <p>
                    Forever! Everything is on-chain so as long as the Ethereum
                    blockchain exists, MemeNumbers will exist.
                </p>
                <Question>OK, how do I get some MemeNumbers?</Question>
                <p>
                    You can get MemeNumbers in one of three ways. By winning at
                    the <Link href="/">Dutch Auction</Link>, by buying off of{' '}
                    <Link href="https://opensea.io/collection/memenumbers">
                        OpenSea
                    </Link>
                    , and by doing math with two Numbers to create a new Number!
                    The Dutch auction starts from Ξ5 (Eth), dropping down to
                    Ξ0.0 linearly in one hour. When you mint, you pay the exact
                    price at the time of minting. If no one mints after an hour
                    then the price will sit at Ξ0 until someone mint (for
                    free!). If you’d rather mint directly on the contract, you
                    can{' '}
                    <Link href="https://mirror.xyz/0x074b48C17119e61FCDf81D46fF6307F24BAC5D82/6_nFFFLb_PMtI88hOCyt5XxpuK_70mbkCCPxjz-BWDE">
                        these instructions
                    </Link>
                    . To buy on OpenSea, just go to{' '}
                    <Link href="https://opensea.io/collection/memenumbers">
                        the collection
                    </Link>{' '}
                    To do math with your Numbers, go to{' '}
                    <Link href="/">Dutch Auction</Link> and plug in your Numbers
                    and choose the desired operator (“a” for addition, “s” for
                    subtraction, “m” for multiplication, “d” for division.) The
                    resulting Number will be minted into your wallet, while the
                    two Numbers used for the operation will be burned. You can
                    also do math directly on the{' '}
                    <Link href="https://mirror.xyz/0x074b48C17119e61FCDf81D46fF6307F24BAC5D82/DKPcui-ri2s8tGKRyOVOMBXBtvwOJLMVTkyVff56zu8">
                        contract
                    </Link>
                </p>
                <Question>Who are you?</Question>
                <p>
                    The four creators of MemeNumbers are the developers, a
                    community manager, and an operations person. They are:
                </p>
                <ul>
                    <li>
                        <a
                            href="https://twitter.com/benhuh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Huh.eth
                        </a>
                        <p>
                            Huh.eth has launched a few DAOs, including the
                            NFT-focused collective{' '}
                            <a
                                href="https://twitter.com/crisisdao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Crisis DAO
                            </a>
                            , and is a General Partner in a small crypto fund.
                            He is an internet culture and meme pioneer from his
                            days at{' '}
                            <a
                                href="https://en.wikipedia.org/wiki/Ben_Huh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cheezburger
                            </a>
                            , the purveyors of lolcats and fail memes.
                        </p>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/nicwn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Nicwn
                        </a>
                        <p>
                            Nick started out as a data guy at Microsoft & Yahoo!
                            He had led the creation of LEGO Ideas. Left the tech
                            scene after becoming a dad and worked in the
                            education NGO sector. Since 2020, he has joined his
                            friends in Crisis DAO and is on his way to losing
                            all his moneys in Jpegs.
                        </p>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/dt_mugen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Denis
                        </a>
                        <p>
                            Denis{' '}
                            <a
                                href="https://github.com/dt665m"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (dt665m)
                            </a>{' '}
                            was an indie game developer who recently started
                            focusing on the intersection between games and
                            blockchains. He has been working on projects to make
                            game assets into NFTs ever since the early days of
                            Ethereum.
                        </p>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/shazow"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Shazow
                        </a>
                        <p>
                            Shazow was one of the two devs behind the{' '}
                            <a
                                href="https://thousandetherhomepage.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Thousand Ether Homepage
                            </a>
                            , which launched in 2017 prior to the ERC-721
                            standard being adopted. It has since been wrapped
                            and tradeable on{' '}
                            <a
                                href="https://opensea.io/collection/thousand-ether-homepage"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OpenSea
                            </a>
                            .
                        </p>
                    </li>
                </ul>
                <Question>What inspired you to create MemeNumbers?</Question>
                <p>
                    The team would like to thank the following projects, their
                    communities, and the people behind them for inspiring us. We
                    believe you are pioneering an amazing world of art and code.
                </p>
                <ul>
                    <li>Nouns.wtf</li>
                    <li>Loot Project</li>
                </ul>
                <p>
                    We are passionate about creating “primitives” for the
                    Ethereum ecosystem. Primitives are basic building blocks of
                    a metaverse that others can use to create a complex and rich
                    universe. We set out to design:
                </p>
                <ol>
                    <li>a 100% Ethereum-chain-only primitive that,</li>
                    <li>
                        minimizes the chance of gas wars for fair distribution
                        and,
                    </li>
                    <li>
                        allows for everyone to have fun and build on top for all
                        eternity.
                    </li>
                </ol>
                <p>
                    We hope you enjoy our project. This is our love letter to
                    Ethereum and its amazing community. ❤️
                </p>
            </div>
        </Container>
    )
}

Faq.layout = Layout

export default Faq
