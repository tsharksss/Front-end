import React from 'react';
import styles from "./post.module.css"
import LeftHand from "../../../../components/LeftHand/LeftHand";
import BigCard from "../../../../components/PostCard/bigCard/bigCard";
import CardMininum from "../../../../components/PostCard/CardMinimum/CardMininum";
import Comments from "../../../../components/user_profile/Comments/Comments";

function Page(props) {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand post_page={true}/>
                <div>
                    <BigCard post={true}/>
                    <div className={styles.content}>

                        <div className={styles.title}>
                            <h1>Title</h1>
                        </div>
                        <div className={styles.text}>
                            <p>
                            Когда ввечеру Илагин распростился с Николаем, Николай оказался на таком далеком расстоянии от дома, что он принял предложение дядюшки оставить охоту, ночевать у него (у дядюшки) в его деревне Михайловке.
                            — И если бы заехали ко мне — чистое дело марш! — сказал дядюшка, — еще бы того лучше; видите, погода мокрая, — говорил дядюшка, — отдохнули бы, графинечку бы отвезли в дрожках. — Предложение дядюшки было принято, за дрожками послали охотника в Отрадное; а Николай с Наташей и Петей поехали к дядюшке.
                            Человек пять, больших и малых, дворовых мужчин выбежало на парадное крыльцо встречать барина. Десятки женщин, старых, больших и малых, высунулись с заднего крыльца смотреть на подъехавших охотников. Присутствие Наташи, женщины, барыни, верхом, довело любопытство дворовых дядюшки до тех пределов удивления, что многие, не стесняясь ее присутствием, подходили к ней, заглядывали ей в глаза и при ней делали о ней свои замечания, как о показываемом чуде, которое не человек и не может слышать и понимать, что говорят о нем.
                            — Аринка, глянь-ка, на бочкю сидит! Сама сидит, а подол болтается... Вишь, и рожок!
                            — Батюшки-светы, ножик-то!..
                            — Вишь, татарка!
                            — Как же ты не перекувырнулась-то? — говорила самая смелая, прямо уж обращаясь к Наташе.
                            Дядюшка слез с лошади у крыльца своего деревянного, заросшего садом домика, и, оглянув своих домочадцев, крикнул повелительно, чтобы лишние отошли и чтобы было сделано все нужное для приема гостей и охоты.
                            Все разбежалось. Дядюшка снял Наташу с лошади и за руку провел ее по шатким дощатым ступеням крыльца. В доме, не оштукатуренном, с бревенчатыми стенами, было не очень чисто, — не видно было, чтобы цель живших людей состояла в том, чтобы не было пятен, но не было заметно запущенности. В сенях пахло свежими яблоками и висели волчьи и лисьи шкуры.
                            Через переднюю дядюшка провел своих гостей в маленькую залу с складным столом и красными стульями, потом в гостиную с березовым круглым столом и диваном, потом в кабинет с оборванным диваном, истасканным ковром и с портретами Суворова, отца и матери хозяина и его самого в военном мундире. В кабинете слышался сильный запах табаку и собак.
                            В кабинете дядюшка попросил гостей сесть и расположиться как дома, а сам вышел. Ругай с невычистившейся спиной вошел в кабинет и лег на диван, обчищая себя языком и зубами. Из кабинета шел коридор, в котором виднелись ширмы с прорванными занавесками. Из-за ширм слышался женский смех и шепот. Наташа, Николай и Петя разделись и сели на диван. Петя облокотился на руку и тотчас же заснул; Наташа и Николай сидели молча. Лица их горели, они были очень голодны и очень веселы. Они поглядели друг на друга (после охоты, в комнате, Николай уже не считал нужным выказывать свое мужское превосходство перед своей сестрой); Наташа подмигнула брату, и оба удерживались недолго и звонко расхохотались, не успев еще придумать предлога для своего смеха.
                            Немного погодя дядюшка вошел в казакине, синих панталонах и маленьких сапогах. И Наташа почувствовала, что этот самый костюм, в котором она с удивлением и насмешкой видала дядюшку в Отрадном, — был настоящий костюм, который был ничем не хуже сюртуков и фраков. Дядюшка был тоже весел; он не только не обиделся смеху брата и сестры (ему в голову не могло прийти, чтобы могли смеяться над его жизнию), а сам присоединился к их беспричинному смеху.
                            — Вот так графиня молодая — чистое дело марш — другой такой не видывал! — сказал он, подавая одну трубку с длинным чубуком Ростову, а другой короткий, обрезанный чубук закладывая привычным жестом между трех пальцев.
                            — День отъездила, хоть мужчине в пору, и как ни в чем не бывало!
                            Скоро после дядюшки отворила дверь — по звуку ног, очевидно, босая — девка, и в дверь с большим уставленным подносом в руках вошла толстая, румяная, красивая женщина лет сорока, с двойным подбородком и полными румяными губами. Она с гостеприимной представительностью и приветливостью в глазах и каждом движенье оглянула гостей и с ласковой улыбкой почтительно поклонилась им. Несмотря на толщину больше чем обыкновенную, заставлявшую ее выставлять вперед грудь и живот и назад держать голову, женщина эта (экономка дядюшки) ступала чрезвычайно легко. Она подошла к столу, поставила поднос и ловко своими белыми, пухлыми руками сняла и расставила по столу бутылки, закуски и угощенья. Окончив это, она отошла и с улыбкой на лице стала у двери. «Вот она и я! Теперь понимаешь дядюшку?» — сказало Ростову ее появление. Как не понимать: не только Ростов, но и Наташа поняла дядюшку и значение нахмуренных бровей и счастливой самодовольной улыбки, которая чуть морщила его губы в то время, как входила Анисья Федоровна. На подносе были травник, наливки, грибки, лепешечки черной муки на юраге, сотовый мед, мед вареный и шипучий, яблоки, орехи сырые и каленые и орехи в меду. Потом принесено было Анисьей Федоровной и варенье на меду и на сахаре, и ветчина, и курица, только что зажаренная.
                            Все это было хозяйства, сбора и варенья Анисьи Федоровны. Все это и пахло, и отзывалось, и имело вкус Анисьи Федоровны. Все отзывалось сочностью, чистотой, белизной и приятной улыбкой.
                            — Покушайте, барышня-графинюшка, — приговаривала она, подавая Наташе то то, то другое. Наташа ела все, и ей показалось, что подобных лепешек на юраге, с таким букетом варений, на меду орехов и такой курицы никогда она нигде не видала и не едала. Анисья Федоровна вышла. Ростов с дядюшкой, запивая ужин вишневой наливкой, разговаривали о прошедшей и о будущей охоте, о Ругае и илагинских собаках. Наташа с блестящими глазами прямо сидела на диване, слушая их. Несколько раз она пыталась разбудить Петю, чтобы дать ему поесть чего-нибудь, но он говорил что-то непонятное, очевидно, не просыпаясь. Наташе так весело было на душе, так хорошо в этой новой для нее обстановке, что она только боялась, что слишком скоро за ней приедут дрожки. После наступившего случайно молчания, как это почти всегда бывает у людей, в первый раз принимающих в своем доме своих знакомых, дядюшка сказал, отвечая на мысль, которая была у его гостей:
                            — Так-то вот и доживаю свой век... Умрешь — чистое дело марш! — ничего не останется. Что ж и грешить-то!
                            Лицо дядюшки было очень значительно и даже красиво, когда он говорил это. Ростов невольно вспомнил при этом все, что он хорошего слыхал от отца и соседей о дядюшке. Дядюшка во всем околотке губернии имел репутацию благороднейшего и бескорыстнейшего чудака. Его призывали судить семейные дела, его делали душеприказчиком, ему поверяли тайны, его выбирали в судьи и другие должности, но от общественной службы он всегда упорно отказывался, осень и весну проводя в полях на своем кауром мерине, зиму сидя дома, летом лежа в своем заросшем саду.
                            — Что же вы не служите, дядюшка?
                            — Служил, да бросил. Не гожусь, чистое дело марш, — я ничего не разберу. Это ваше дело, а у меня ума не хватит. Вот насчет охоты другое дело, — это чистое дело марш! Отворите-ка дверь-то, — крикнул он. — Что ж затворили! — Дверь в конце коридора (который дядюшка называл колидор) вела в холостую охотническую: так называлась людская для охотников. Босые ноги быстро зашлепали, и невидимая рука отворила дверь в охотническую. Из коридора ясно стали слышны звуки балалайки, на которой играл, очевидно, какой-нибудь мастер этого дела. Наташа уже давно прислушивалась к этим звукам и теперь вышла в коридор, чтобы слышать их яснее.
                            — Это у меня мой Митька-кучер... Я ему купил хорошую балалайку, люблю, — сказал дядюшка. У дядюшки было заведено, чтобы, когда он приезжает с охоты, в холостой охотнической Митька играл на балалайке. Дядюшка любил слушать эту музыку.
                            — Как хорошо! Право, отлично, — сказал Николай с некоторым невольным пренебрежением, как будто ему совестно было признаться в том, что ему очень были приятны эти звуки.
                            — Как отлично? — с упреком сказала Наташа, чувствуя тон, которым сказал это брат. — Не отлично, а это прелесть что такое! — Ей так же как грибки, мед и наливки дядюшки казались лучшими в мире, так и эта песня казалась ей в эту минуту верхом музыкальной прелести.
                            — Еще, пожалуйста, еще, — сказала Наташа в дверь, как только замолкла балалайка. Митька настроил и опять задребезжал Барыню с переборами и перехватами. Дядюшка сидел и слушал, склонив голову набок с чуть заметной улыбкой. Мотив Барыни повторился раз сто. Несколько раз балалайку настраивали, и опять дребезжали те же звуки, и слушателям не наскучивало, а только хотелось еще и еще слышать эту игру. Анисья Федоровна вошла и прислонилась своим тучным телом к притолоке.
                            — Изволите слушать, графинечка, — сказала она Наташе с улыбкой, чрезвычайно похожей на улыбку дядюшки. — Он у нас славно играет, — сказала она.
                            — Вот в этом колене не то делает, — вдруг с энергическим жестом сказал дядюшка. — Тут рассыпать надо — чистое дело марш — рассыпать.
                            — А вы разве умеете? — спросила Наташа. Дядюшка, не отвечая, улыбнулся.
                            — Посмотри-ка, Анисьюшка, что струны-то целы, что ль, на гитаре-то? Давно уж в руки не брал, чистое дело марш! забросил.
                            Анисья Федоровна охотно пошла своей легкой поступью исполнить поручение своего господина и принесла гитару.
                            Дядюшка, ни на кого не глядя, сдунул пыль, костлявыми пальцами стукнул по крышке гитары, настроил и поправился на кресле. Он взял (несколько театральным жестом, отставив локоть левой руки) гитару повыше шейки и, подмигнув Анисье Федоровне, начал не Барыню, а взял один звучный, чистый аккорд и мерно, спокойно, но твердо начал весьма тихим темпом отделывать известную песню «По у-ли-и-ице мостовой». Враз, в такт с тем степенным весельем (тем самым, которым дышало все существо Анисьи Федоровны), запел в душе у Николая и Наташи мотив песни. Анисья Федоровна закраснелась и, закрывшись платочком, смеясь вышла из комнаты. Дядюшка продолжал чисто, старательно и энергически твердо отделывать песню, изменившимся вдохновенным взглядом глядя на то место, с которого ушла Анисья Федоровна. Чуть-чуть что-то смеялось в его лице, с одной стороны под седым усом, особенно смеялось тогда, когда дальше расходилась песня, ускорялся темп и в местах переборов отрывалось что-то.
                            — Прелесть, прелесть, дядюшка! еще, еще! — закричала Наташа, как только он кончил. Она, вскочивши с места, обняла дядюшку и поцеловала его. — Николенька, Николенька! — говорила она, оглядываясь на брата и как бы спрашивая его: что же это такое?
                            Николаю тоже очень нравилась игра дядюшки. Дядюшка второй раз заиграл песню. Улыбающееся лицо Анисьи Федоровны явилось опять в дверях, и из-за ней еще другие лица.
                            </p>
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.comments}>
                        <Comments/>
                        <Comments/>
                        <Comments/>
                        <Comments/>
                        <Comments/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;