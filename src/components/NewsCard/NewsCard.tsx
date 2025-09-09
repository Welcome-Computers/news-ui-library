import CommonAvatar from '@components/CommonAvatar/CommonAvatar';
import { Card, Image, Tag } from 'antd';
import { getSFullName } from "@util/helper";

import { Typography } from 'antd';
const { Title } = Typography;

interface iProps {
	item: any;
	type?: "type-1" | "type-2" | "type-3" | "type-4" | "type-5" | "type-6" | "type-7" | "type-8" | "type-9" | "type-10" | "type-11" | "type-12" | "type-13" | "type-14" | "type-15" | undefined;
}

const truncateWords = (text: string, count: number) => {
	const words = text.split(' ');
	return words.length > count ? words.slice(0, count).join(' ') + '...' : text;
}

const NewsCard = (props: iProps) => {
	const { item, type = 'default' } = props || {}

	const defaultType = () => (
		<Card
			cover={<Image height={250} src={item?.article_image} alt={item?.title} preview={false} />}
			className={`jg-news-card__image-wrapper ${type}`}>

			<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			<div className="jg-news-card__reporter">
				<CommonAvatar
					size={30}
					src={item?.reporter?.profile_pick}
					name={getSFullName(item?.reporter)}
				/>
				<strong className="jg-news-card__reporter--name">{getSFullName(item?.reporter)}</strong>
				<span className="jg-news-card__date">– {item?.news_date}</span>
			</div>
		</Card>
	);

	const renderType1 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			<div className="jg-news-card__reporter">
				<span className="jg-news-card__date">{item?.news_date}</span>
			</div>
		</div>
	);

	const renderType2 = () => (
		<Card
			cover={
				<Image height={200} src={item?.article_image} alt={item?.title} preview={false} className="news-cover" />}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className="jg-news-card__section">
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
				<div className="jg-news-card__reporter">
					<CommonAvatar
						size={30}
						src={item?.reporter?.profile_pick}
						name={getSFullName(item?.reporter)}
					/>
					<strong className="jg-news-card__reporter--name">{getSFullName(item?.reporter)}</strong>
					<span className="jg-news-card__date">– {item?.news_date}</span>
				</div>
			</div>
		</Card>
	);

	const renderType3 = () => (
		<Card
			cover={
				<Image height={100} src={item?.article_image} alt={item?.title} preview={false} className="news-cover" />
			}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className="jg-news-card__section right-section">
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			</div>
		</Card>
	);

	const renderType4 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<div className="jg-news-card__section left-section">
				<Image width={100} height={100} src={item?.article_image} alt={item?.title} preview={false} className="news-cover" />
			</div>
			<div className="jg-news-card__section right-section">
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
				<Title className='jg-news-card__title' level={5}>
					{item?.articleCategories?.length > 0 && (
						<div className='jg-news-card__category'>
							{item?.articleCategories
								?.slice(0, 2)
								?.map((el: any) => {
									return <Tag color="red" key={el?.category?.id}>{el?.category?.name}</Tag>
								})}
							{item?.articleCategories.length > 2 && (
								<Tag color="blue">+{item.articleCategories.length - 3} more</Tag>
							)}
						</div>
					)}
				</Title>
			</div>
		</div>
	);

	const renderType5 = () => (
		<Card
			cover={<Image height={600} src={item?.article_image} alt={item?.title} preview={false} />}
			style={{
				backgroundImage: `url(${item?.article_image})`,
			}}
			className={`jg-news-card__image-wrapper ${type}`}>

			<div className='jg-news-card__content'>
				<div className='jg-news-card__content--inner'>
					<Title className='jg-news-card__category-box' level={5}>
						{item?.articleCategories?.length > 0 && (
							<div className='jg-news-card__category'>
								{item?.articleCategories
									?.slice(0, 2)
									?.map((el: any) => {
										return <Tag color="red" key={el?.category?.id}>{el?.category?.name}</Tag>
									})}

								{item?.articleCategories.length > 2 && (
									<Tag color="blue">+{item.articleCategories.length - 3} more</Tag>
								)}
							</div>
						)}
					</Title>
					<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
					<p className="jg-news-card__summary">{truncateWords(item?.summary || '', 6)}</p>
					<div className="jg-news-card__reporter">
						<CommonAvatar
							size={40}
							src={item?.reporter?.profile_pick}
							name={getSFullName(item?.reporter)}
						/>
						<strong className="jg-news-card__reporter--name">{getSFullName(item?.reporter)}</strong>
						<span className="jg-news-card__date">– {item?.news_date}</span>
					</div>
				</div>
			</div>
		</Card >
	);

	const renderType6 = () => (
		<Card
			cover={
				<div
					className='jg-news-card__image-box'
					style={{ backgroundImage: `url(${item?.article_image})` }}
				>
				</div>
			}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				<div className='jg-news-card__content--inner'>
					<Title className='jg-news-card__category-box' level={5}>
						{item?.articleCategories?.length > 0 && (
							<div className='jg-news-card__category'>
								{item?.articleCategories
									?.slice(0, 2)
									?.map((el: any) => {
										return <Tag color="red" key={el?.category?.id}>{el?.category?.name}</Tag>
									})}
								{item?.articleCategories.length > 2 && (
									<Tag color="blue">+{item.articleCategories.length - 3} more</Tag>
								)}
							</div>
						)}
					</Title>
					<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
					<div className="jg-news-card__reporter">
						<CommonAvatar
							size={40}
							src={item?.reporter?.profile_pick}
							name={getSFullName(item?.reporter)}
						/>
						<strong className="jg-news-card__reporter--name">{getSFullName(item?.reporter)}</strong>
						<span className="jg-news-card__date">– {item?.news_date}</span>
					</div>
					<p className="jg-news-card__summary">{truncateWords(item?.summary || '', 6)}</p>
				</div>
			</div>
		</Card>
	);

	const renderType7 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
				{/* <p className="jg-news-card__summary">{truncateWords(item?.summary || '', 6)}</p> */}
				<div className="jg-news-card__reporter">
					<span className="jg-news-card__date">{item?.news_date}</span>
				</div>
			</div>
		</div>
	);

	const renderType8 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				{item?.articleCategories?.length > 0 && (
					<Title className='jg-news-card__category' level={5}>
						{item?.articleCategories?.map((el: any, index: number) => {
							return <span key={index}>{el?.category?.name}</span>
						})}
					</Title>
				)}
				<h3 className="jg-news-card__title">{item?.title}</h3>
				<p className="jg-news-card__summary">{truncateWords(item?.summary || '', 6)}</p>
				<div className="jg-news-card__reporter">
					<span className="jg-news-card__date">{item?.news_date}</span>
				</div>
			</div>
		</div>
	);

	const renderType9 = () => (
		<Card
			cover={<Image src={item?.article_image} alt={item?.title} preview={false} />}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				{item?.articleCategories?.length > 0 && (
					<Title className='jg-news-card__category' level={5}>
						{item?.articleCategories?.map((el: any, index: number) => {
							return <span key={index}>{el?.category?.name}</span>
						})}
					</Title>
				)}
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			</div>
		</Card>
	);

	const renderType10 = () => (
		<Card
			cover={<Image height={200} src={item?.article_image} alt={item?.title} preview={false} />}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				{item?.articleCategories?.length > 0 && (
					<Title className='jg-news-card__category' level={5}>
						{item?.articleCategories?.map((el: any, index: number) => {
							return <span key={index}>{el?.category?.name}</span>
						})}
					</Title>
				)}
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			</div>
		</Card>
	);

	const renderType11 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<div className="jg-news-card__section right-section">
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
				<div className="jg-news-card__reporter">
					<span className="jg-news-card__date">– {item?.news_date}</span>
				</div>
			</div>
		</div>
	);

	const renderType12 = () => (
		<div className='jg-news-card-cover'>
			<Card
				cover={<Image height={550} src={item?.article_image} alt={item?.title} preview={false} />}
				style={{ backgroundImage: `url(${item?.article_image})` }}
				className={`jg-news-card__image-wrapper ${type}`}>

				<div className="jg-news-card__section">
					<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
					<div className="jg-news-card__reporter">
						<span className="jg-news-card__date">{item?.news_date}</span>
					</div>
				</div>
			</Card>
			<div className="jg-news-card__main--category">
				<Tag color="#000">{item?.articleCategories?.[0].category?.name}</Tag>
			</div>
		</div>
	);

	const renderType13 = () => (
		<Card
			cover={<Image height={300} src={item?.article_image} alt={item?.title} preview={false} />}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className="jg-news-card__section">
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
				<div className="jg-news-card__reporter">
					<CommonAvatar
						size={30}
						src={item?.reporter?.profile_pick}
						name={getSFullName(item?.reporter)}
					/>
					<strong className="jg-news-card__reporter--name">{getSFullName(item?.reporter)}</strong>
					<span className="jg-news-card__date">– {item?.news_date}</span>
				</div>
				<p className="jg-news-card__summary">{truncateWords(item?.summary || '', 6)}</p>
			</div>
		</Card>
	);

	const renderType14 = () => (
		<div className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				<h3 className="jg-news-card__title">{item?.title}</h3>

				<div className="jg-news-card__reporter">
					{item?.articleCategories?.length > 0 && (
						<div className='jg-news-card__category'>
							{item?.articleCategories?.map((el: any) => {
								return <Tag color="red" key={el?.category?.id}>{el?.category?.name}</Tag>
							})}
						</div>
					)}
					<span className="jg-news-card__date">{item?.news_date}</span>
				</div>
			</div>
		</div>
	);

	const renderType15 = () => (
		<Card
			cover={<Image height={200} src={item?.article_image} alt={item?.title} preview={false} />}
			className={`jg-news-card__image-wrapper ${type}`}>
			<div className='jg-news-card__content'>
				<h3 className="jg-news-card__title">{item?.is_exclusive ? <Tag color='#cf1322'>Exclusive</Tag> : null}{item?.title}</h3>
			</div>
		</Card>
	);


	return (
		<div className={`jg-news-card outer-${type} ${type}`}>
			{/* <h1>{type}</h1> */}
			<a href={`/news/${item?.slug}-${item?.id}`}>
				{type === 'type-1' ? renderType1() :
					type === 'type-2' ? renderType2() :
						type === 'type-3' ? renderType3() :
							type === 'type-4' ? renderType4() :
								type === 'type-5' ? renderType5() :
									type === 'type-6' ? renderType6() :
										type === 'type-7' ? renderType7() :
											type === 'type-8' ? renderType8() :
												type === 'type-9' ? renderType9() :
													type === 'type-10' ? renderType10() :
														type === 'type-11' ? renderType11() :
															type === 'type-12' ? renderType12() :
																type === 'type-13' ? renderType13() :
																	type === 'type-14' ? renderType14() :
																		type === 'type-15' ? renderType15() :
																			defaultType()}
			</a>
		</div>
	);
}

export default NewsCard

// <NewsCard type='type-3' key={item.id} item={item} />

{/* <Card className='jg-news-card__ard'
cover={<Image className='jg-news-card__image' src={item?.article_image} alt={item?.title} width={300} height={250} />}
bordered={false}>
<Title className='jg-news-card__title' level={5}>
	{item?.articleCategories?.length > 0 && (
		<div>
			{item?.articleCategories?.map((el: any) => {
				return <span>{el?.category?.name}</span>
			})}
		</div>
	)}

	{item?.title}
</Title>

<span className='jg-news-card__author'>
	<Image width={20} height={20} src={item?.reporter?.profile_pick} alt="" />
	<p><strong>{getSFullName(item?.reporter)}</strong> - {item?.news_date}</p>
</span>
</Card> */}


