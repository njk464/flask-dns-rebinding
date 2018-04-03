from flask import request, Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
	attack_file = open("attack.bak", "r")
	attack_content = attack_file.read()
	return render_template("index.html", attack = attack_content)

@app.route('/upload', methods=['POST'])
def upload_file():
  if request.method == 'POST':
    # check if the post request has the file part
    print request.files['file'].read()
  return ""

if __name__ == '__main__':
	app.run(host="0.0.0.0")
