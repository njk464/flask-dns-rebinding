from flask import request, Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/vuln1')
def vuln1():
	attack_file = open("attack.bak", "r")
	attack_content = attack_file.read()
	return render_template("vuln1.html", attack = attack_content)

@app.route('/vuln2')
def vuln2():
	return render_template("vuln2.html")

if __name__ == '__main__':
	app.run(host="0.0.0.0")
