import PropTypes from "prop-types";

export const historyItemPropTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
};

export const cardItemPropTypes = {
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    id: PropTypes.number.isRequired,
    poster: PropTypes.string
};

export const detailedPropTypes = {
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    seriesLength: PropTypes.number,
    movieLength: PropTypes.number,
    totalSeriesLength: PropTypes.number,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string
        })
    ),
    description: PropTypes.string,
    poster: PropTypes.shape({
        url: PropTypes.string
    }),
    backdrop: PropTypes.shape({
        url: PropTypes.string
    }),
    isMovieLiked: PropTypes.bool,
    handleAddToFavorites: PropTypes.func
};