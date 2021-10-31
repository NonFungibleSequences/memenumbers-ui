import React from 'react'
import type { Page } from '../src/types/PageComponent'
import Layout from '../src/components/Layout'

const Faq: Page = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div>
                <h2>Basics</h2>

                <h3>What are MemeNumbers?</h3>
                <p>
                    MemeNumbers (MN) is a project that creates random Numbers as
                    NFTs on Ethereum. All Numbers are unique (there can be no
                    duplicates) in our collection. The entire project is
                    on-chain and relies on just the Ethereum chain.
                </p>
                <p>
                    There are two parts to playing the MemeNumbers game. The
                    first part is the minting contract we call the Number
                    Generator where up to 8 random numbers can be minted.
                </p>
                <p>
                    The second part is the Burn Operator contract. This contract
                    allows any MemeNumber owner to take two Number NFTs and
                    perform one operation to create a new Number. In other
                    words, insert two NFTs, get one back. The new resulting
                    Number is unique and a part of the MemeNumber set, meaning
                    that if that Number already exists, then the minting
                    contract cannot create that Number and no one else can use
                    the operator contract to have that Number. It’s like a game
                    of musical chairs.
                </p>

                <h3>How does it work?</h3>
                <p>
                    Every one (1) hour, everyday, until the end of Ethereum, a
                    set of numbers will be randomly generated and auctioned off
                    from the remaining available number-space. We are using a
                    Dutch auction mechanism to reduce the gas wars typically
                    associated with a drop.
                </p>

                <h3>Why is this project important?</h3>
                <p>
                    Primitives are a very useful class of NFTs and contracts in
                    the crypto world. They allow anyone to build derivatives
                    without permission while inheriting the properties of the
                    primitive. We believe that there are lots more primitives
                    that can be built for Ethereum and it will enable more
                    creativity with less complexity. If Money Legos exist, then
                    it implies the existence of many other Legos. Meme Numbers
                    are a class of number Legos.
                </p>

                <h3>Can I keep Operating numbers?</h3>
                <p>
                    Yes. All you need to do is pay for gas. We do not charge to
                    burn Numbers. You can keep burning any two Numbers as long
                    as the resulting number does not already exist. If the
                    resulting number exists, the Burn Operator will not allow
                    you to mint the burn. You will need both burner numbers in
                    the same wallet. The newly minted number will be minted into
                    the same wallet.
                </p>

                <h3>What is the cost of minting a number?</h3>
                <p>
                    The numbers are priced using a Dutch auction where the price
                    is reduced over the 1 hour auction period. After an hour, if
                    no one has won the auction, the price will fall to zero and
                    stay there until someone mints for free. Just pay gas. By
                    using the Dutch auction method, we hope to avoid the gas
                    wars associated with many NFT projects.
                </p>

                <h3>How are the numbers chosen?</h3>
                <p>
                    The possible range of numbers are 1 through
                    115792089237316195423570985008687907853269984665640564039457584007913129639936.
                    That’s a lot of numbers. The numbers are randomly generated
                    using the blockhash as the seed. Based on probability,
                    numbers with a single digit are the rarest, followed by two
                    digits, then three, and so on. We have excluded 0 since it
                    breaks things and possibly creates a black hole if not used
                    properly.
                </p>
                <p>
                    The randomizer can be seen in the{' '}
                    <a
                        href="https://github.com/NonFungibleSequences/memenumbers-contract/blob/1342b64af6d72c0f5c4cf4b62cc57785c7d2c458/src/MemeNumbers.sol#L68"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contract
                    </a>
                    .
                </p>

                <h3>Why did you create this?</h3>
                <p>
                    We are passionate about creating “primitives” for the
                    Ethereum ecosystem. Primitives are basic building blocks of
                    a metaverse that others can use to create a complex, and
                    rich world. We set out to design:
                </p>
                <ol>
                    <li>a 100% Ethereum-chain-only primitive that</li>
                    <li>
                        minimizes the chance of gas wars for fair distribution
                        and
                    </li>
                    <li>
                        allows for everyone to have fun and build on top for all
                        eternity
                    </li>
                </ol>
                <p>
                    We hope you enjoy our project. This is our love letter to
                    Ethereum and this amazing community.
                </p>

                <h2>The People and Community</h2>

                <h3>Who are the people behind this project?</h3>
                <p>
                    The four people behind MemeNumbers are two developers, a
                    community manager, and an operations person. We wanted to
                    call this the Memenacci Project, but we could not get
                    clarity on how to spell it, so we went with MemeNumbers
                    instead.
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
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/dt_mugen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Denis(dt665m)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/nicwn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Nicwn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/shazow"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Shazow
                        </a>
                    </li>
                </ul>

                <h3>What experience do you have creating crypto projects?</h3>
                <p>
                    Shazow was one of the two devs behind the{' '}
                    <a
                        href="https://thousandetherhomepage.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Thousand Ether Homepage
                    </a>
                    , which launched in 2017 prior to the ERC-721 standard being
                    adopted. It has since been wrapped and tradeable on{' '}
                    <a
                        href="https://opensea.io/collection/thousand-ether-homepage"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OpenSea
                    </a>
                    .
                </p>
                <p>
                    Huh.eth has launched a few DAOs, including the NFT-focused
                    collective{' '}
                    <a
                        href="https://twitter.com/crisisdao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Crisis DAO
                    </a>
                    , and is a General Partner in a small crypto fund. He is an
                    internet culture and meme pioneer from his days at{' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Ben_Huh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cheezburger
                    </a>
                    , the purveyors of lolcats and fail memes.
                </p>
                <p>
                    Nick started out as a data guy at Microsoft & Yahoo! He had
                    led the creation of LEGO Ideas. Left the tech scene after
                    becoming a dad and worked in the education NGO sector. Since
                    2020, he has joined his friends in Crisis DAO and is on his
                    way to losing all his moneys in Jpegs.
                </p>
                <p>
                    Denis{' '}
                    <a
                        href="https://github.com/dt665m"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (dt665m)
                    </a>
                    was an indie game developer who recently started focusing on
                    the intersection between games and blockchains. He has been
                    working on projects to make game assets into NFTs ever since
                    the early days of Ethereum.
                </p>

                <h3>What’s the roadmap?</h3>
                <p>
                    Our roadmap adheres to the “primitive” philosophy: Bottom-up
                    like the Loot Project, instead of top-down. Therefore,
                    beyond this launch, we have not committed to any further
                    development. We would love to and we have lots of ideas
                    though, but we’re most looking forward to what others build.
                    We want you to participate on the face value of this project
                    so far.
                </p>

                <h2>Project Details</h2>

                <h3>Is the contract audited or verified?</h3>
                <p>
                    The contracts are verified on Etherscan, but not audited. We
                    provide no warranties or guarantees on these contracts.
                    Please do your research before aping into any NFT project.
                    Having said that, we strive to be fair, transparent, and
                    only make promises we can keep. Please visit our Discord and
                    ask us any questions!
                </p>

                <h3>Why are you using an auction and not a bonding curve?</h3>
                <p>
                    We’re using a Dutch auction process to maximize fair
                    distribution and minimize the gas wars. The Dutch auction is
                    essential for the premise of releasing sequence batches,
                    otherwise there will just be a dumb land grab if we let
                    people mint however many numbers they want as long as
                    they're first and pay highest gas. That’s not fair. And it
                    subtracts 90% of the fun.
                </p>

                <h3>Why is there no artwork with the NFT?</h3>
                <p>
                    Since we’re creating a primitive, we have purposefully
                    decided to keep the visual art to a minimum. It is possible
                    for us or other projects to do so in the future. We consider
                    our art to be this project itself and the logic behind it.
                </p>

                <h3>Are you a DAO?</h3>
                <p>
                    No. We’re just a team of four people sitting in front of
                    Etherscan, wondering when our transaction will be mined. We
                    have started and joined DAOs and we’d be happy to see others
                    form DAOs around this project.
                </p>

                <h2>Project Economics</h2>

                <h3>Why will MemeNumbers be valuable?</h3>
                <p>
                    All MemeNumbers are unique, so there can only be one “420,”
                    or “1,” or “999999999,” or whatever string of numbers you
                    deem valuable. Since the Number Generator issues numbers at
                    random, it’s very unlikely it will generate the exact number
                    you want. That’s where your skills using the Burn Operator
                    comes in. The value you create is one part luck, two parts
                    galaxy brain.
                </p>

                <h3>
                    If I mint a MemeNumber, can I resell it like any other NFT?
                </h3>
                <p>
                    Yes. Absolutely. You can use OpenSea, Rarible, or any site
                    that supports ERC-721 trading. To encourage trading, we
                    decided not to charge for royalties from the sale of
                    MemeNumbers on secondary markets.
                </p>

                <h3>How many MemeNumbers will there be?</h3>
                <p>
                    The size of the MemeNumbers collection depends on how
                    quickly the auctions are closing, how many are being minted
                    when an auction is won, and how many numbers are being
                    burned. Therefore, we cannot predict the number of
                    MemeNumbers.
                </p>

                <h3>Do you have a token (ERC-20)?</h3>
                <p>
                    No. You are free to create one and airdrop them to our
                    community. If you do, you must:{' '}
                </p>
                <ol>
                    <li>Promise not to rug them</li>
                    <li>make it clear we did not create them.</li>
                </ol>

                <h2>Technical Details</h2>

                <h3>Can I see the metadata?</h3>
                <p>
                    Yes. The entire NFT consists of a single piece of metadata —
                    the number itself — which acts as the token ID.
                </p>

                <h3>Why can’t I go negative?</h3>
                <p>
                    We believe in unity and positivity. But that’s not why you
                    can’t go negative. The ERC-721 standard does not support
                    negative token IDs.
                </p>

                <h3>Can you speed up or slow down the minting?</h3>
                <p>
                    Nope. The minting should continue long after we have left
                    this mortal coil and our consciousnesses have been deployed
                    in the big blockchain in the sky.
                </p>

                <h3>What can I build on top of MemeNumbers?</h3>
                <p>Anything you want. Please enjoy this primitive.</p>

                <h3>Can the number distribution algorithm be changed?</h3>
                <p>
                    The number distribution algorithm is the heart and soul of
                    MemeNumbers. We want to make it as immutable and transparent
                    as possible. We are proud to have made the decision to make
                    it on-chain and non-upgradeable.
                </p>

                <h2>Credits</h2>

                <h3>Inspirations</h3>
                <p>
                    The team would like to thank the following projects, their
                    communities, and the people behind them for inspiring us. We
                    believe you are pioneering an amazing world of art and code.
                </p>
                <ul>
                    <li>Nouns.wtf</li>
                    <li>Loot Project</li>
                </ul>
            </div>
        </div>
    )
}

Faq.layout = Layout

export default Faq
