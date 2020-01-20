import 	React, { Component }	from	'react';

/*
**	NOTES:
**		To install this component, we will modify App.js and add <ErrorBoundry> as a wrapper of <CardList>.
** 		To test this component, we will go to CardList.js and 
*/
class 	ErrorBoundry	extends	Component	{
	constructor(props)	{
		super(props);

		this.state	=	{
			hasError: 	false 												//
		}
	}

	/*
	**	componentDidCatch()	-
	*/
	componentDidCatch(error, info)	{
		this.setState({ hasError: true })
	}

	render()	{
		if (this.state.hasError) {
			return	<h1>Oooops.  That is not good</h1>
		}

		//	Otherwise, render whatever is inside the error boundry.
		//
		return	this.props.children
	}
}

export	default	ErrorBoundry;