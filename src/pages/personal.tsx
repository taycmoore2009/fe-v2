import React, {useState, useEffect, useCallback} from 'react';
import _ from 'lodash';

import {createFlickr, API} from 'flickr-sdk'

type Photo = {img: string; id: string; title: string;};

const Pagination = ({nextPage, previousPage, page, numOfPages}: {
    nextPage: () => void;
    previousPage: () => void;
    page: number;
    numOfPages: number;
}) => {
    return (
        <div className="pagination">
            <button className="previousPage" onClick={previousPage}>{`<`}</button>
            <div className="paginationPosition">
                Page {page} of {numOfPages}
            </div>
            <button className="nextPage" onClick={nextPage}>{'>'}</button>
        </div>
    )
};

export const Personal = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState(1);
    const [currentPhoto, setCurrentPhoto] = useState<Photo | undefined>(undefined);
    const [numOfPages, setNumOfPages] = useState(0);
    const [{flickr}] = useState(createFlickr('a8b1cb91cd5325d42f1f7278ed3e0e07'));
    useEffect(() => {
        /** Load flicker api */
        const loadFlickr = async () => {
            const {photos} = await flickr('flickr.groups.pools.getPhotos', {
                group_id: '14734920@N24',
                per_page: '20',
                page: String(page)
            }) as {
                photos: {
                    photo: {
                        server: string;
                        id: string;
                        secret: string;
                        title: string;
                    }[]
                    pages: number;
                }
            };
            if (photos && photos.photo.length) {
                const newPhotos = [] as Photo[];
    
                photos.photo.forEach((photo) => {
                    newPhotos.push({img: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`, id: photo.id, title: photo.title});
                });
                setPhotos(newPhotos);
                setNumOfPages(photos.pages);
            }
        }
        loadFlickr();
    }, [flickr, page]);

    const nextPage = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    const previousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);


    return (
        <div className="contentWrapper personalWrapper">
            <div>
                <h2>Quick Background</h2>
                <p>Coming Soon</p>
            </div>
            <div className="flickrContainer">
                <div>
                    <h2>Photo Gallery (It's mostly dogs)</h2>
                </div>
                <Pagination 
                    nextPage={nextPage} 
                    previousPage={previousPage}
                    page={page}
                    numOfPages={numOfPages}
                />
                <div className="flickrPhotosWrapper">
                    {photos.map(photo => {
                        return (
                            <div
                                className="flickrImgContainer"
                                onClick={() => {setCurrentPhoto(photo)}}
                                style={{
                                    backgroundImage: `url(${photo.img})`,
                                }}
                            />
                        );
                    })}
                </div>
                <Pagination 
                    nextPage={nextPage} 
                    previousPage={previousPage}
                    page={page}
                    numOfPages={numOfPages}
                />
            </div>
            {currentPhoto && (
                <div className="modalWrapper">
                    <div className="modal bgWhite borBlack">
                        <div className="modalExit" onClick={() => {setCurrentPhoto(undefined)}}>x</div>
                        <div className="modalHeader">
                            {currentPhoto.title}
                        </div>
                        <div className="modalBody">
                            <img className="flickrModalPhoto" src={currentPhoto.img} />
                        </div>
                        <div className="modalFooter">
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};