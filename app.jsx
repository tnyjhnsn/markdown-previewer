var initialText = "# h1\n## h2\n### h3\n\n" +
	"__bold__ *italic* ~~strikethrough~~ `fixed-width`\n\n" +
	"Unordered List\n* something\n* something else\n* something more\n\n" +
	"Ordered List\n1. something\n* something else\n* last something";

var MarkdownViewer = React.createClass({

	getInitialState: function() {
		return {markdown: this.props.markdown}
	},

	onChange: function(event) {
		this.setState({markdown: event.target.value});
	},

	render: function() {
		return (
			<div className="markdown">
				<div className="editor">
				<h3>Editor</h3>
					<textarea
			    		defaultValue={this.state.markdown}
			    		onChange={this.onChange} />
				</div>
		    	<div className="viewer">
					<h3>Viewer</h3>
		    		<div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
		    	</div>
			</div>
		);
    }
});

ReactDOM.render(
	<MarkdownViewer markdown={initialText} />,
 	document.body
);

